import { useState } from 'react'
import { Check } from 'lucide-react'
import ClothingThumb from '../components/ClothingThumb.jsx'
import { closetItems, shoeItems, accessoryItems } from '../data/mockData.js'

const CATEGORY_TABS = ['전체', '상의', '하의', '아우터', '기타']

export default function ClosetPage() {
  const [tab, setTab] = useState('전체')
  const [includeExtras, setIncludeExtras] = useState(false)

  const filtered =
    tab === '전체' ? closetItems : closetItems.filter((i) => i.category === tab)

  return (
    <div className="px-5 pt-6 pb-4 space-y-4">
      <header>
        <p className="text-[11px] text-maroon font-semibold">내 옷장</p>
        <h1 className="text-lg font-bold text-ink">등록된 옷 {closetItems.length}벌</h1>
      </header>

      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {CATEGORY_TABS.map((c) => (
          <button
            key={c}
            onClick={() => setTab(c)}
            className={`px-3.5 py-1.5 rounded-full text-[12px] whitespace-nowrap font-medium ${
              tab === c ? 'bg-maroon text-white' : 'bg-card text-muted'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {filtered.map((item) => (
          <div key={item.id} className="bg-card rounded-xl2 p-2.5 shadow-sm">
            <ClothingThumb image={item.image} className="w-full h-28 mb-2" />
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-semibold text-ink truncate">{item.name}</p>
              {item.confirmed ? (
                <Check size={13} className="text-maroon shrink-0" />
              ) : (
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-maroon-light text-maroon shrink-0">
                  추정
                </span>
              )}
            </div>
            <p className="text-[10px] text-muted">{item.category} · {item.color}</p>
          </div>
        ))}
      </div>

      {/* 신발·악세사리 확장 영역 (Phase 2) */}
      <div className="bg-card rounded-xl2 p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-ink">신발 · 악세사리</p>
            <p className="text-[11px] text-muted">아직 등록된 항목이 없어요</p>
          </div>
          <button
            onClick={() => setIncludeExtras((v) => !v)}
            className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors ${
              includeExtras ? 'bg-maroon justify-end' : 'bg-black/15 justify-start'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-white shadow" />
          </button>
        </div>
        <p className="text-[10px] text-muted leading-relaxed">
          추천 조합에 포함 · 기본값 OFF, 켜면 신발 1~2켤레 · 악세사리 등록으로 이동해요.
        </p>
        {(shoeItems.length === 0 && accessoryItems.length === 0) && (
          <button className="w-full py-2 rounded-xl border border-dashed border-maroon/40 text-maroon text-[12px] font-medium">
            + 신발 · 악세사리 등록하기
          </button>
        )}
      </div>
    </div>
  )
}
