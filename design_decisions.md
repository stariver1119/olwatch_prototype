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
- **Decision**: **Option C (Compact List with Large Index)**
- **Details**:
    - **Layout**: Small thumbnail on the left, text content on the right.
    - **Index Number**: Large, stylized number (background effect) placed prominently (e.g., behind or next to the thumbnail).
    - **Separators**: Horizontal lines separating each video item.
    - **Typography**: Smaller font size for titles.
- **Rationale**: To mimic the "Episode List" aesthetic (like Netflix/Disney+ episode selectors) rather than a social feed.

## 4. Color Palette
- **Decision**: **Dark Blue Theme**
- **Details**:
    - **Background**: `#16151D` (Deep Dark Blue/Black)
    - **Text**: `#FFFFFF` (White)
    - **Accent 1 (Primary)**: `#5CA6CE` (Bright Blue - Buttons, Highlights)
    - **Accent 2 (Secondary)**: `#5A5B9F` (Muted Blue/Purple - Subtitles, Secondary Actions)
    - **Accent 3 (Dark)**: `#263056` (Dark Blue - Card Backgrounds, Hover States)
- **Rationale**: To create an immersive, premium dark mode experience with a cohesive blue identity.

## 5. Video Player Page Design
- **Decision**: **Immersive Dark Blue UI**
- **Details**:
    - **Player Background**: `#000000` (Pure black for focus).
    - **Info Area**: Keep default background `#16151D`.
    - **Action Buttons (Next Ep, Share)**: Use `Primary Color (#5CA6CE)` for emphasis.
    - **Meta Info (Tags, Date)**: `Secondary Color (#5A5B9F)` text or subtle badges.
    - **Header**: Auto-hide on playback, overlay on touch (semi-transparent black).
- **Rationale**: Use brand colors as accents without distracting from the video.

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
- **결정**: **C안 (큰 인덱스가 있는 컴팩트 리스트)**
- **상세**:
    - **레이아웃**: 왼쪽에 작은 썸네일, 오른쪽에 텍스트 콘텐츠.
    - **인덱스 번호**: 크고 스타일리시한 번호(배경 효과)를 눈에 띄게 배치 (예: 썸네일 뒤나 옆).
    - **구분선**: 각 영상 항목을 구분하는 가로선.
    - **타이포그래피**: 제목 폰트 크기를 작게 조정.
- **이유**: 소셜 피드보다는 "에피소드 목록"의 미학(넷플릭스/디즈니+ 에피소드 선택 화면 등)을 따르기 위함입니다.

## 4. 컬러 팔레트
- **결정**: **다크 블루 테마**
- **상세**:
    - **배경**: `#16151D` (깊은 다크 블루/블랙)
    - **텍스트**: `#FFFFFF` (화이트)
    - **강조 1 (Primary)**: `#5CA6CE` (밝은 블루 - 버튼, 하이라이트)
    - **강조 2 (Secondary)**: `#5A5B9F` (차분한 블루/퍼플 - 부제목, 보조 액션)
    - **강조 3 (Dark)**: `#263056` (다크 블루 - 카드 배경, 호버 상태)
- **이유**: 통일감 있는 블루 아이덴티티로 몰입감 있고 고급스러운 다크 모드 경험을 제공하기 위함입니다.

## 5. 영상 재생 페이지 디자인
- **결정**: **몰입형 다크 블루 UI**
- **상세**:
    - **플레이어 배경**: `#000000` (영상 집중을 위해 완전 블랙).
    - **정보 영역**: 기본 배경 `#16151D` 유지.
    - **액션 버튼 (다음 화, 공유 등)**: `Primary Color (#5CA6CE)` 사용하여 강조.
    - **메타 정보 (태그, 날짜)**: `Secondary Color (#5A5B9F)` 텍스트 또는 은은한 배지.
    - **헤더**: 영상 재생 시 자동 숨김, 터치 시 오버레이 (반투명 블랙).
    - **헤더**: 영상 재생 시 자동 숨김, 터치 시 오버레이 (반투명 블랙).
- **이유**: 영상 시청 경험을 방해하지 않으면서도 브랜드 컬러를 포인트로 활용.

## 6. Routing Strategy / 라우팅 전략
- **Decision**: **HashRouter (#)**
- **Details**: 
    - URLs will include a hash (e.g., `/#/slowspurt`).
    - Explicitly chose `HashRouter` over `BrowserRouter`.
- **Rationale**: 
    - **GitHub Pages Compatibility**: GitHub Pages does not support single-page app (SPA) HTML5 history mode (clean URLs) natively. It returns 404 for unknown paths.
    - **Reliability**: Using the hash fragment prevents server-side 404 errors during direct access or page refreshes without requiring complex 404 hacks.
    - **Consistency**: Ensures the app loads correctly on the static hosting environment.

## 6. 라우팅 전략
- **결정**: **HashRouter (# 사용)**
- **상세**:
    - URL에 해시가 포함됩니다 (예: `/#/slowspurt`).
    - `BrowserRouter` 대신 `HashRouter`를 사용하기로 명시적 결정.
- **이유**:
    - **GitHub Pages 호환성**: GitHub Pages는 기본적으로 SPA의 HTML5 history 모드(깔끔한 URL)를 지원하지 않으며, 알 수 없는 경로에 대해 404 에러를 반환합니다.
    - **안정성**: 해시를 사용하면 서버 설정을 건드리지 않고도 새로고침이나 직접 접속 시 404 에러를 방지할 수 있습니다.
    - **일관성**: 정적 호스팅 환경에서 앱이 항상 올바르게 로드되도록 보장합니다.
    - **Note**: This is a **Temporary Strategy** for the prototype phase (up to v0.5.x).
        - **Plan**: Migrate to **Firebase Hosting** (or similar) in **v0.6.0** to enable `BrowserRouter` (Clean URLs) with proper server-side configuration.
    - **참고**: 이는 프로토타입 단계(v0.5.x까지)를 위한 **임시 전략**입니다.
        - **계획**: **v0.6.0**에서 **Firebase Hosting** 등으로 이전하며 서버 설정을 통해 깔끔한 URL(`BrowserRouter`)을 지원할 예정입니다.
