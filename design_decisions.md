# Design Decisions / 디자인 결정 사항

## Overview / 개요
This document records key UI/UX decisions and design principles for the OLWatch project.

## 1. Desktop View Behavior
- **Decision**: **Option A (App Simulation)**
- **Details**: The app will be displayed in a fixed-width container (simulating a mobile device) centered on the screen. The background outside the container will be neutral (e.g., black/gray).
- **Rationale**: To maintain a consistent mobile-first experience across all devices.

## 2. Navigation Structure
- **Decision**: **Option A (Simple)** with modifications.
- **Details**: 
    - A simple 'Back' button header.
    - **Specific Behavior**: The header exists on the Player Page but should be **hidden** once playback starts (immersive mode).
- **Rationale**: Focus on content consumption; minimize distractions during playback.

## 3. List Style
- **Decision**: **Option B (Card Style)**
- **Details**: Full-width thumbnails with text content below them.
- **Rationale**: Provides a more visual, engaging experience similar to modern social media feeds.

## 4. Color Palette
- **Decision**: **Dark Blue Theme**
- **Details**:
    - **Background**: `#16151D` (Deep Dark Blue/Black)
    - **Text**: `#FFFFFF` (White)
    - **Accent 1 (Primary)**: `#5CA6CE` (Bright Blue - Buttons, Highlights)
    - **Accent 2 (Secondary)**: `#5A5B9F` (Muted Blue/Purple - Subtitles, Secondary Actions)
    - **Accent 3 (Dark)**: `#263056` (Dark Blue - Card Backgrounds, Hover States)
- **Rationale**: To create an immersive, premium dark mode experience with a cohesive blue identity.

---

# 디자인 결정 사항

## 개요
이 문서는 OLWatch 프로젝트의 주요 UI/UX 결정 사항과 디자인 원칙을 기록합니다.

## 1. 데스크톱 뷰 처리 방식
- **결정**: **A안 (앱 시뮬레이션)**
- **상세**: 화면 중앙에 고정된 너비의 컨테이너(모바일 기기 시뮬레이션)로 앱을 표시합니다. 컨테이너 외부 배경은 무채색(예: 검정/회색)으로 처리합니다.
- **이유**: 모든 기기에서 일관된 모바일 우선 경험을 유지하기 위함입니다.

## 2. 내비게이션 구조
- **결정**: **A안 (심플)** (수정됨)
- **상세**:
    - '뒤로가기' 버튼이 있는 단순한 헤더.
    - **구체적 동작**: 재생 페이지에 헤더가 존재하지만, **재생이 시작되면 숨겨져야 합니다** (몰입 모드).
- **이유**: 콘텐츠 소비에 집중하고 재생 중 방해 요소를 최소화하기 위함입니다.

## 3. 리스트 스타일
- **결정**: **B안 (카드형)**
- **상세**: 가로로 꽉 차는 썸네일과 그 아래에 텍스트가 배치되는 형태.
- **이유**: 최신 소셜 미디어 피드와 유사한, 시각적으로 더 매력적인 경험을 제공하기 위함입니다.

## 4. 컬러 팔레트
- **결정**: **다크 블루 테마**
- **상세**:
    - **배경**: `#16151D` (깊은 다크 블루/블랙)
    - **텍스트**: `#FFFFFF` (화이트)
    - **강조 1 (Primary)**: `#5CA6CE` (밝은 블루 - 버튼, 하이라이트)
    - **강조 2 (Secondary)**: `#5A5B9F` (차분한 블루/퍼플 - 부제목, 보조 액션)
    - **강조 3 (Dark)**: `#263056` (다크 블루 - 카드 배경, 호버 상태)
- **이유**: 통일감 있는 블루 아이덴티티로 몰입감 있고 고급스러운 다크 모드 경험을 제공하기 위함입니다.
