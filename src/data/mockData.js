// 목업용 더미 데이터

export const closetItems = [
  { id: 1, category: '아우터', name: '베이지 블레이저', color: '베이지', material: '울 혼방', confirmed: true, image: 'blazer' },
  { id: 2, category: '상의', name: '화이트 셔츠', color: '화이트', material: '면', confirmed: true, image: 'shirt' },
  { id: 3, category: '하의', name: '슬랙스', color: '차콜', material: '폴리에스터', confirmed: false, image: 'pants' },
  { id: 4, category: '아우터', name: '네이비 니트가디건', color: '네이비', material: '니트', confirmed: false, image: 'cardigan' },
  { id: 5, category: '상의', name: '스트라이프 티셔츠', color: '화이트/블루', material: '면', confirmed: false, image: 'tshirt' },
  { id: 6, category: '하의', name: '데님 팬츠', color: '인디고', material: '데님', confirmed: true, image: 'denim' },
  { id: 7, category: '기타', name: '원피스', color: '블랙', material: '레이온', confirmed: false, image: 'dress' },
]

export const shoeItems = []
export const accessoryItems = []

export const calendarMonthLabel = '3월 2주차'
export const weekDays = ['월', '화', '수', '목', '금', '토', '일']

export const calendarWeeks = [
  [null, null, null, null, null, 1, 2],
  [3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30],
]

export const eventDates = {
  9: { label: '오늘' },
  10: { label: '일정' },
}

export const dayEvents = {
  10: {
    title: '클라이언트 미팅',
    context: '외부 미팅 · 실내',
    outfit: {
      name: '단정한 오피스 코디',
      items: ['블레이저', '화이트 셔츠', '슬랙스', '로퍼'],
      reason: '외부 미팅 일정이 있어 단정한 조합을 추천 · 실내 에어컨 대비 아우터 포함',
    },
  },
  9: {
    title: '오늘 일정 없음',
    context: '',
    outfit: {
      name: '가볍고 편안한 코디',
      items: ['니트가디건', '스트라이프 티셔츠', '데님 팬츠', '스니커즈'],
      reason: '등록된 일정이 없어 무난한 데일리 조합을 추천',
    },
  },
}
