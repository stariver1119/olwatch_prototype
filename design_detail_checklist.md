## Format / 작성 서식
- **[ ] Item Name**: Description of what feels "off" or needs improvement. (Location/Page) -> `Possible Solution`
- **Resolved Section**: Use `##` (h2) at the bottom. List items in **reverse chronological order** (newest resolved item at the top).

---

## 🏗 Ambiguous / ambiguous (애매한 부분)
*Adjustments needed but not sure strictly "how" yet.*

## ✅ Resolved / 해결됨
- [x] **Play Icon Inconsistency (Mobile vs PC)**
    - **Resolution**: **Option A (SVG Replacement)** / SVG 교체
    - **Details**:
        - **Problem**: Unicode character (`▶`) rendered as colored emoji on mobile.
        - **Fix**: Replaced with inline SVG (`<svg>`) using `currentColor`.
        - **Style**: Standardized size (`2rem`) and added `drop-shadow` for visibility.


- [x] **Episode Number Styling (Series List)**
    - **Resolution**: **Option A+B Hybrid (Small Overlay)** / A+B 혼합안 (소형 오버레이)
    - **Details**:
        - **Implementation**: Moved inside thumbnail wrapper, positioned absolute bottom-left.
        - **Spec**: `1.2rem` font size, `0.8px` white outline stroke, `0.8` opacity.
        - **Spacing**: `bottom: 6px`, `padding-left: 6px` (Consistent alignment).
    - **Note**: If this still feels cluttered in the future, **removing the index number entirely** (`Option C`) is the next step. / 추후 여전히 복잡해 보인다면 아예 삭제하는 것을 고려.

- [x] File created.
