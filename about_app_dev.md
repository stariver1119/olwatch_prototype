# Mobile App Development Strategy / 모바일 앱 개발 전략

## Overview
This document outlines the strategic decision to build the OLWatch mobile application using a **Hybrid Architecture (React Native + Native Player)**. This approach balances development efficiency with premium playback performance.

이 문서는 OLWatch 모바일 앱을 **하이브리드 아키텍처 (React Native + Native Player)**로 구축하기로 한 전략적 결정과 그 근거를 기술합니다. 이 접근 방식은 개발 효율성과 프리미엄 재생 성능의 균형을 맞춥니다.

---

## 1. Selected Architecture: Hybrid (Strategy B) / 선정된 아키텍처

- **Core Framework**: **React Native (Expo)**
    - Handles the entire UI, navigation, networking, and business logic.
    - **핵심 프레임워크**: React Native (Expo)가 UI, 내비게이션, 비즈니스 로직 전반을 담당합니다.

- **Video Player**: **Native Module (Swift/Kotlin)**
    - The video player component is implemented using native code for each platform to ensure maximum control and performance.
    - **비디오 플레이어**: 재생 컴포넌트만 각 플랫폼(iOS/Android)의 네이티브 코드로 직접 구현하여 제어권과 성능을 극대화합니다.

---

## 2. Rationale / 결정 근거

### A. Performance where it counts (성능과 효율의 최적점)
- **Player Quality**: The "heart" of the app (the player) needs to be direct-to-metal. Using Native code here ensures zero latency, perfect gesture handling, and immediate buffering control.
- **UI Efficiency**: The rest of the app (lists, profile, settings) does not require the heavy cost of native development. React Native provides near-native performance for these standard UIs.
- **플레이어 품질**: 앱의 핵심인 '플레이어'는 지연 없는 반응속도와 완벽한 제스처 처리를 위해 네이티브로 구현합니다.
- **UI 효율성**: 나머지 화면(리스트, 설정 등)은 React Native로 구현하여 생산성을 높입니다.

### B. Control & Scalability (제어권과 확장성)
- **Native Control**: By implementing the player natively, we retain full control over the playback engine. This allows us to adopt future video technologies or optimize for specific hardware without banking on third-party libraries.
- **Unlimited Scalability**: The Client Architecture does not limit User Scalability (MAU). As long as the backend scales, this hybrid client can serve millions of users just like full native apps (e.g., Instagram, Discord).
- **네이티브 제어권**: 플레이어를 직접 네이티브로 짜기 때문에, 향후 새로운 비디오 기술 도입이나 하드웨어 최적화 시 100% 제어권을 가집니다.
- **무제한 확장성**: 클라이언트 아키텍처는 MAU(사용자 수)의 제약이 되지 않습니다. 백엔드만 받쳐준다면 이 하이브리드 앱으로도 수천만 명의 유저를 감당할 수 있습니다.

### C. Resource Optimization (리소스 최적화)
- Even with unlimited resources, maintaining two completely separate codebases (iOS-Swift, Android-Kotlin) for simple UI screens is inefficient. This strategy allows us to focus our "Native Experts" solely on the player engine, while "React Developers" iterate rapidly on features.
- 리소스가 충분하더라도, 단순 UI 화면까지 두 개의 코드로 관리하는 것은 비효율적입니다. 이 전략을 통해 네이티브 전문가는 '플레이어 엔진'에 집중하고, 기능 개발은 React로 빠르게 진행할 수 있습니다.

---

## 3. Implementation Plan (Draft) / 구현 계획 (초안)

1. **Phase 1**: Setup React Native (Expo) project & Port existing React UI.
2. **Phase 2**: Develop Custom Native Player Modules (Bridge to RN).
3. **Phase 3**: Integration & Performance Tuning.

---

*Verified by Antigravity (Google DeepMind) Strategy Report - 2025.12.26*
