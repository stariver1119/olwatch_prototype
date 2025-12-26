# Design Detail Checklist / 디자인 디테일 체크리스트

## Overview / 개요
This document tracks design elements that are "functional but not perfect" or "need more polish." It serves as a backlog for visual refinements to be addressed when time permits.
이 문서는 "기능은 하지만 완벽하지 않은" 또는 "더 다듬어야 할" 디자인 요소들을 기록합니다. 개발 중간중간 여유가 생길 때 시각적 완성도를 높이기 위한 백로그 역할을 합니다.

## Format / 작성 서식
- **[ ] Item Name**: Description of what feels "off" or needs improvement. (Location/Page) -> `Possible Solution`
- **Resolved Section**: Use `##` (h2) at the bottom. List items in **reverse chronological order** (newest resolved item at the top).

---

## 🏗 Ambiguous / ambiguous (애매한 부분)
*Adjustments needed but not sure strictly "how" yet.*

- [ ] **Example**: The shadow on the main card feels too heavy on mobile. -> `Try reducing opacity to 0.1`

## ✨ Polish Wishlist / 디테일 폴리싱 (욕심내기)
*Things that would make it look "Premium" but aren't critical.*

- [ ] **Example**: Add a subtle hover glow to the 'Next Episode' button.

## ✅ Resolved / 해결됨
- [x] **Episode Number Styling (Series List)**
    - **Resolution**: **Option A+B Hybrid (Small Overlay)** / A+B 혼합안 (소형 오버레이)
    - **Details**:
        - **Implementation**: Moved inside thumbnail wrapper, positioned absolute bottom-left.
        - **Spec**: `1.2rem` font size, `0.8px` white outline stroke, `0.8` opacity.
        - **Spacing**: `bottom: 6px`, `padding-left: 6px` (Consistent alignment).
    - **Note**: If this still feels cluttered in the future, **removing the index number entirely** (`Option C`) is the next step. / 추후 여전히 복잡해 보인다면 아예 삭제하는 것을 고려.

- [x] File created.
