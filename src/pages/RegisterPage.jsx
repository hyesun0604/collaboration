import { useState } from 'react'
import { Camera, Sparkles, Eye } from 'lucide-react'

const CATEGORIES = ['상의', '하의', '아우터', '기타']

export default function RegisterPage() {
  const [photoTaken, setPhotoTaken] = useState(true)
  const [category, setCategory] = useState('아우터')
  const [confirmed, setConfirmed] = useState(false)

  return (
    <div className="px-5 pt-6 pb-4 space-y-4">
      <header>
        <p className="text-[11px] text-maroon font-semibold">옷 등록</p>
        <h1 className="text-lg font-bold text-ink">접힌 상태로 바로 촬영해요</h1>
        <p className="text-[11px] text-muted mt-0.5">펼쳐서 찍을 필요 없이, 옷장 속 그대로 등록하세요.</p>
      </header>

      {/* 촬영 영역 */}
      <div className="bg-card rounded-xl2 p-4 shadow-sm space-y-3">
        {photoTaken ? (
          <div
            className="w-full h-44 rounded-xl2 flex items-center justify-center relative"
            style={{ background: 'linear-gradient(135deg,#D9CBB4,#C2AE8E)' }}
          >
            <div className="w-1/3 h-1/3 rounded-md bg-white/20" />
            <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-white">
              접힌 상태
            </span>
          </div>
        ) : (
          <button
            onClick={() => setPhotoTaken(true)}
            className="w-full h-44 rounded-xl2 border-2 border-dashed border-black/10 flex flex-col items-center justify-center gap-2 text-muted"
          >
            <Camera size={26} />
            <span className="text-[12px]">탭해서 촬영하기</span>
          </button>
        )}

        {/* AI 추정 태그 */}
        <div className="rounded-xl border border-black/5 p-3 space-y-2 bg-[#FBF9F6]">
          <div className="flex items-center gap-1.5 text-maroon">
            <Sparkles size={13} />
            <p className="text-[12px] font-semibold">AI 추정 태그</p>
            {!confirmed && (
              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-maroon-light text-maroon">
                추정
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5 text-[11px]">
            <span className="px-2.5 py-1 rounded-full bg-white border border-black/5">색상: 베이지</span>
            <span className="px-2.5 py-1 rounded-full bg-white border border-black/5">소재: 울 혼방</span>
          </div>
          <p className="text-[10px] text-muted">색상·소재 인식은 정확도가 높아요. 카테고리는 아래에서 직접 선택해 보강해 주세요.</p>
        </div>

        {/* 카테고리 선택 */}
        <div>
          <p className="text-[11px] text-muted mb-1.5">카테고리 선택</p>
          <div className="grid grid-cols-4 gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`py-2 rounded-xl text-[12px] font-medium ${
                  category === c ? 'bg-maroon text-white' : 'bg-[#F1EDE6] text-ink'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setConfirmed(true)}
          className="w-full py-3 rounded-xl bg-maroon text-white text-sm font-semibold"
        >
          {confirmed ? '등록 완료 ✓' : '확인하고 등록하기'}
        </button>
      </div>

      {/* Phase 4 가상 착용 미리보기 배너 */}
      <div className="bg-card rounded-xl2 p-4 shadow-sm flex items-start gap-3">
        <div className="w-9 h-9 rounded-full bg-maroon-light flex items-center justify-center shrink-0">
          <Eye size={16} className="text-maroon" />
        </div>
        <div>
          <p className="text-[12px] font-semibold text-ink">가상 착용 미리보기 (비공개 테스트)</p>
          <p className="text-[10px] text-muted mt-0.5 leading-relaxed">
            아우터·원피스부터 지원 예정 · 소규모 비공개 테스트 참여자에게 먼저 제공돼요.
          </p>
        </div>
      </div>
    </div>
  )
}
