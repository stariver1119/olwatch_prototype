# OLWatch (올와치)

**YouTube 크리에이터 시리즈를 위한 몰입형 정주행 플랫폼**

---

## 📖 Overview

OLWatch는 YouTube 크리에이터가 자신의 영상 시리즈를 큐레이션하고, 시청자가 알고리즘 방해 없이 집중해서 정주행할 수 있는 서드파티 웹 서비스입니다.

### Key Features

- **크리에이터 맞춤 큐레이션**: 시리즈용 타이틀, 설명, 순서를 재구성
- **끊김없는 자동 재생**: 영상 종료 시 자동으로 다음 에피소드 재생
- **집중된 시청 환경**: 추천 알고리즘 없이 해당 시리즈에만 몰입
- **에피소드 중심 UI**: 스트리밍 플랫폼 스타일의 에피소드 리스트

---

## 🎯 Problem & Solution

### YouTube의 한계
- 알고리즘이 다양한 콘텐츠를 추천하여 시리즈 완주 방해
- 썸네일 중심으로 맥락 전달 부족
- 재생목록의 불편한 UX

### OLWatch의 솔루션
- 크리에이터가 시리즈 스토리 흐름 제어
- 자동 재생으로 끊김없는 정주행
- 에피소드 목록 중심의 몰입형 UI

---

## ✨ Features

### 🎬 시리즈 재생목록 페이지
- 시리즈 정보 (타이틀, 크리에이터, 통계)
- "첫화부터 보기" 및 "공유" 버튼
- 에피소드 목록: 큰 인덱스 번호, 작은 썸네일, 타이틀 및 설명

### 📺 영상 재생 페이지
- 중앙 고정 YouTube 플레이어
- 영상 종료 시 자동으로 다음 에피소드 재생
- "다음 화" 및 "목록으로" 버튼
- 재생 시 헤더 자동 숨김 (몰입 모드)

---

## 🎨 Design

### Color Palette - Dark Blue Theme
- Background: `#16151D`
- Primary: `#5CA6CE` (Bright Blue)
- Secondary: `#5A5B9F` (Muted Purple)
- Accent: `#263056` (Dark Blue)

### Layout
- 모바일 우선 디자인 (430px 고정 너비)
- 데스크톱에서 중앙 정렬
- 다크 모드 기반 몰입형 UI

---

## 🛠️ Tech Stack

- **React 18** + **Vite**
- **React Router DOM** - Routing
- **react-youtube** - YouTube IFrame API
- **CSS Variables** - Theming

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 📊 Prototype Scope

### ✅ Implemented
- 단일 시리즈 (3개 영상, 정적 데이터)
- 시리즈 재생목록 페이지
- 자동 재생 영상 플레이어
- 다음 에피소드 자동 진행
- 다크 블루 테마
- 공유 기능

### 🚧 Future Development
- 백엔드 API 및 데이터베이스
- 다중 시리즈 지원
- 크리에이터 관리 도구
- 사용자 인증 및 시청 기록

---

## 📁 Project Structure

```
src/
├── components/       # UI components
├── pages/           # Home, Player pages
├── data/            # mockData.js
└── index.css        # Global styles
```

---

## 📝 Documentation

- [`Initial Proposal.md`](./Initial%20Proposal.md) - 프로젝트 기획서
- [`design_decisions.md`](./design_decisions.md) - 디자인 결정 사항
- [`implementation_status.md`](./implementation_status.md) - 구현 현황

---

## 🎯 Purpose

이 프로토타입은 팀원 및 초기 고객에게 서비스 컨셉을 시연하기 위해 제작되었습니다. YouTube 크리에이터가 자신의 콘텐츠를 더 효과적으로 전달하고, 시청자가 원하는 시리즈에 집중할 수 있는 환경을 제공하는 것이 목표입니다.

---

# OLWatch

**Immersive Binge-Watching Platform for YouTube Creator Series**

---

## 📖 개요

OLWatch는 YouTube 크리에이터가 영상 시리즈를 큐레이션하고, 시청자가 알고리즘 방해 없이 정주행할 수 있는 서드파티 웹 서비스입니다.

### 주요 기능

- **크리에이터 맞춤 큐레이션**: 시리즈용 타이틀, 설명, 순서 재구성
- **끊김없는 자동 재생**: 영상 종료 시 자동으로 다음 에피소드 재생
- **집중된 시청 환경**: 추천 알고리즘 없이 시리즈만 몰입
- **에피소드 중심 UI**: 스트리밍 플랫폼 스타일 에피소드 리스트

---

## 🎯 문제 및 솔루션

### YouTube의 한계
- 알고리즘이 다양한 콘텐츠 추천으로 시리즈 완주 방해
- 썸네일 중심으로 맥락 전달 부족
- 재생목록의 불편한 UX

### OLWatch의 솔루션
- 크리에이터가 시리즈 스토리 흐름 제어
- 자동 재생으로 끊김없는 정주행
- 에피소드 목록 중심의 몰입형 UI

---

## ✨ 기능

### 🎬 시리즈 재생목록 페이지
- 시리즈 정보 (타이틀, 크리에이터, 통계)
- "첫화부터 보기" 및 "공유" 버튼
- 에피소드 목록: 큰 인덱스 번호, 작은 썸네일, 타이틀 및 설명

### 📺 영상 재생 페이지
- 중앙 고정 YouTube 플레이어
- 영상 종료 시 자동으로 다음 에피소드 재생
- "다음 화" 및 "목록으로" 버튼
- 재생 시 헤더 자동 숨김 (몰입 모드)

---

## 🎨 디자인

### 컬러 팔레트 - 다크 블루 테마
- 배경: `#16151D`
- 주 강조색: `#5CA6CE` (밝은 블루)
- 부 강조색: `#5A5B9F` (차분한 퍼플)
- 3차 강조색: `#263056` (다크 블루)

### 레이아웃
- 모바일 우선 디자인 (430px 고정 너비)
- 데스크톱에서 중앙 정렬
- 다크 모드 기반 몰입형 UI

---

## 🛠️ 기술 스택

- **React 18** + **Vite**
- **React Router DOM** - 라우팅
- **react-youtube** - YouTube IFrame API
- **CSS Variables** - 테마 시스템

---

## 🚀 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build
```

---

## 📊 프로토타입 범위

### ✅ 구현됨
- 단일 시리즈 (3개 영상, 정적 데이터)
- 시리즈 재생목록 페이지
- 자동 재생 영상 플레이어
- 다음 에피소드 자동 진행
- 다크 블루 테마
- 공유 기능

### 🚧 향후 개발
- 백엔드 API 및 데이터베이스
- 다중 시리즈 지원
- 크리에이터 관리 도구
- 사용자 인증 및 시청 기록

---

## 📁 프로젝트 구조

```
src/
├── components/       # UI 컴포넌트
├── pages/           # Home, Player 페이지
├── data/            # mockData.js
└── index.css        # 전역 스타일
```

---

## 📝 문서

- [`Initial Proposal.md`](./Initial%20Proposal.md) - 프로젝트 기획서
- [`design_decisions.md`](./design_decisions.md) - 디자인 결정 사항
- [`implementation_status.md`](./implementation_status.md) - 구현 현황

---

## 🎯 목적

이 프로토타입은 팀원 및 초기 고객에게 서비스 컨셉을 시연하기 위해 제작되었습니다. YouTube 크리에이터가 자신의 콘텐츠를 더 효과적으로 전달하고, 시청자가 원하는 시리즈에 집중할 수 있는 환경을 제공하는 것이 목표입니다.

---
