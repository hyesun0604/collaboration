# AGENTS.md

이 저장소는 base44 UI 목업 프로젝트입니다 (Vite + React + Tailwind, SPA, mock 데이터만 사용, 백엔드 없음).

## 개발 서버
- `docker compose -f docker-compose.base44.yml up -d` 로 실행, 포트 3000에서 서비스됩니다.
- 소스는 바인드 마운트되어 있고 `npm install && vite dev` 가 컨테이너 시작 시 실행됩니다 (컨테이너 안에 `node_modules` 볼륨 없음, 매 시작 시 설치).
- HashRouter 사용 중이라 새로고침 시에도 라우트가 유지됩니다.

## 구조
- `src/pages/CalendarPage.jsx` — 캘린더 연동 · 일정 기반 코디 추천 (기획서 p.5 화면)
- `src/pages/ClosetPage.jsx` — 내 옷장 목록 (접힌 옷 등록 결과, 추정 태그, 신발/악세사리 확장 옵션)
- `src/pages/RegisterPage.jsx` — 접힌 옷 촬영 등록 플로우 + AI 추정 태그 확인 + 가상 착용 미리보기 배너
- `src/data/mockData.js` — 모든 화면이 참조하는 더미 데이터 (실제 API 없음)

## 확인 방법
`curl http://localhost:3000/` 로 200과 `<div id="root">` 포함 HTML이 오는지 확인. 화면 자체는 SPA라 브라우저에서 확인해야 합니다.
