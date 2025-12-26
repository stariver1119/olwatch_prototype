import React, { useEffect, useRef } from "react";
import "./AnimatedText.css";

const AnimatedText = ({
    text = "— Olwatch",
    noRepeat = false,
    animate = true,
    circleSize = 166,
    wordSpacing = 0,
    letterSpacing = 1,
    animationSpeed = 10,
    backgroundColor = "#5CA6CE",
    fontWeight = 500,
}) => {
    const circlePathRef = useRef(null);
    const textPathRef = useRef(null);
    const svgRef = useRef(null);
    const fontFamily =
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

    useEffect(() => {
        updateCirclePath();
    }, [circleSize]);

    useEffect(() => {
        updateText();
    }, [
        text,
        noRepeat,
        circleSize,
        wordSpacing,
        letterSpacing,
        fontWeight,
    ]);

    const updateCirclePath = () => {
        if (!circlePathRef.current) return;

        const center = 200;
        const radius = circleSize;
        circlePathRef.current.setAttribute(
            "d",
            `M${center},${center} m-${radius},0 a${radius},${radius} 0 1,0 ${radius * 2},0 a${radius},${radius} 0 1,0 -${radius * 2},0`,
        );
        updateText();
    };

    const getTextLength = (
        textContent,
        fontSize,
        letterSpacingValue,
    ) => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
        return (
            context.measureText(textContent).width +
            (textContent.length - 1) * letterSpacingValue
        );
    };

    const spaceOutWords = (
        inputText,
        circleLength,
        fontSize,
        wordSpacingValue,
        letterSpacingValue,
    ) => {
        const words = inputText.split(" ");
        let totalLength =
            getTextLength(inputText, fontSize, letterSpacingValue) +
            (words.length - 1) * wordSpacingValue;

        if (totalLength <= circleLength) {
            return inputText;
        }
        return null;
    };

    const repeatPhrase = (
        inputText,
        circleLength,
        fontSize,
        wordSpacingValue,
        letterSpacingValue,
    ) => {
        let phraseLength =
            getTextLength(inputText, fontSize, letterSpacingValue) +
            (inputText.split(" ").length - 1) * wordSpacingValue;
        let maxRepetitions = Math.floor(
            circleLength / phraseLength,
        );

        if (maxRepetitions >= 1) {
            let totalTextLength = phraseLength * maxRepetitions;
            let remainingSpace = circleLength - totalTextLength;
            let spaceBetweenPhrases = remainingSpace / maxRepetitions;

            let spaceCharWidth = getTextLength(
                " ",
                fontSize,
                letterSpacingValue,
            );
            let spacerLength = Math.round(
                spaceBetweenPhrases / spaceCharWidth,
            );
            let spacer = " ".repeat(spacerLength);

            return (inputText + spacer).repeat(maxRepetitions).trim();
        }
        return null;
    };

    const updateText = () => {
        if (!textPathRef.current || !circlePathRef.current) return;

        const inputText = text.trim();
        const circlePath = circlePathRef.current;

        // Calculate circle length even if getTotalLength is not available
        let circleLength;
        try {
            circleLength = circlePath.getTotalLength();
        } catch (e) {
            // Fallback to calculation
            circleLength = 2 * Math.PI * circleSize;
        }

        if (!circleLength || isNaN(circleLength)) {
            circleLength = 2 * Math.PI * circleSize;
        }

        let fontSize = 40;

        // Binary search optimization or just simple decrement (original was decrement)
        // Original loop:
        while (fontSize > 8) {
            let finalText = "";
            if (noRepeat) {
                finalText = spaceOutWords(
                    inputText,
                    circleLength,
                    fontSize,
                    wordSpacing,
                    letterSpacing,
                );
            } else {
                finalText = repeatPhrase(
                    inputText,
                    circleLength,
                    fontSize,
                    wordSpacing,
                    letterSpacing,
                );
            }

            if (finalText) {
                textPathRef.current.textContent = finalText;
                textPathRef.current.setAttribute("font-size", fontSize);
                textPathRef.current.setAttribute(
                    "font-family",
                    fontFamily,
                );
                textPathRef.current.setAttribute(
                    "font-weight",
                    fontWeight,
                );
                textPathRef.current.setAttribute(
                    "word-spacing",
                    `${wordSpacing}px`,
                );
                textPathRef.current.setAttribute(
                    "letter-spacing",
                    `${letterSpacing}px`,
                );
                return;
            }
            fontSize--;
        }
    };

    return (
        <div
            className="animated-text-container"
            style={{ backgroundColor }}
        >
            <div className="animated-text-inner">
                <svg
                    width={circleSize * 2}
                    height={circleSize * 2}
                    viewBox="0 0 400 400"
                    id="mainSvg"
                    ref={svgRef}
                >
                    <g
                        id="circleGroup"
                        className={animate ? "spin-animation" : ""}
                        style={{ animationDuration: `${animationSpeed}s` }}
                    >
                        <path
                            id="circlePath"
                            d="M200,200 m-150,0 a150,150 0 1,0 300,0 a150,150 0 1,0 -300,0"
                            fill="none"
                            ref={circlePathRef}
                        />
                        <text id="circleText">
                            <textPath
                                href="#circlePath"
                                startOffset="0%"
                                ref={textPathRef}
                            ></textPath>
                        </text>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default AnimatedText;
