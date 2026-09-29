import { useState } from 'react'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import {
  calendarMonthLabel,
  weekDays,
  calendarWeeks,
  eventDates,
  dayEvents,
} from '../data/mockData.js'

export default function CalendarPage() {
  const [linked, setLinked] = useState(true)
  const [selected, setSelected] = useState(10)

  const event = dayEvents[selected]

  return (
    <div className="px-5 pt-6 pb-4 space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-[11px] text-maroon font-semibold">오늘의 코디</p>
          <h1 className="text-lg font-bold text-ink">캘린더 연동 코디 추천</h1>
        </div>
      </header>

      {/* 연동 토글 */}
      <div className="flex items-center justify-between bg-card rounded-xl2 px-4 py-3 shadow-sm">
        <div>
          <p className="text-sm font-semibold text-ink">내 일정 연동</p>
          <p className="text-[11px] text-muted">읽기 권한만 사용 · 민감 일정 제외 가능</p>
        </div>
        <button
          onClick={() => setLinked((v) => !v)}
          className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors ${
            linked ? 'bg-maroon justify-end' : 'bg-black/15 justify-start'
          }`}
        >
          <span className="w-5 h-5 rounded-full bg-white shadow" />
        </button>
      </div>

      {/* 캘린더 카드 */}
      <div className="bg-card rounded-xl2 px-4 py-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <button className="text-muted"><ChevronLeft size={16} /></button>
          <p className="text-sm font-semibold text-ink">캘린더 · {calendarMonthLabel}</p>
          <button className="text-muted"><ChevronRight size={16} /></button>
        </div>
        <div className="grid grid-cols-7 text-center text-[11px] text-muted mb-1">
          {weekDays.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="space-y-1">
          {calendarWeeks.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7 text-center">
              {week.map((day, di) => {
                if (!day) return <div key={di} className="py-2" />
                const hasEvent = !!eventDates[day]
                const isSelected = day === selected
                return (
                  <button
                    key={di}
                    onClick={() => setSelected(day)}
                    className="py-1 flex flex-col items-center gap-0.5"
                  >
                    <span
                      className={`w-7 h-7 flex items-center justify-center rounded-full text-[12px] ${
                        isSelected
                          ? 'bg-maroon text-white font-semibold'
                          : day === 9
                          ? 'bg-maroon-light text-maroon font-semibold'
                          : 'text-ink'
                      }`}
                    >
                      {day}
                    </span>
                    <span
                      className={`w-1 h-1 rounded-full ${
                        hasEvent ? 'bg-maroon' : 'bg-transparent'
                      }`}
                    />
                  </button>
                )
              })}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-2 text-[10px] text-muted">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-maroon-light" />오늘</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-maroon" />일정 있음</span>
        </div>
      </div>

      {/* 추천 카드 */}
      {event && (
        <div className="bg-card rounded-xl2 p-4 shadow-sm space-y-3">
          <div>
            <p className="text-[11px] text-muted">{selected}일 {event.context && `· ${event.context}`}</p>
            <p className="text-base font-bold text-ink">{event.title}</p>
          </div>

          <div className="rounded-xl border border-black/5 p-3 space-y-2 bg-[#FBF9F6]">
            <div className="flex items-center gap-1.5 text-maroon">
              <Sparkles size={14} />
              <p className="text-sm font-semibold">{event.outfit.name}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {event.outfit.items.map((it) => (
                <span
                  key={it}
                  className="px-2.5 py-1 rounded-full bg-maroon-light text-maroon text-[11px] font-medium"
                >
                  {it}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-muted leading-relaxed">
              추천: {event.outfit.reason}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
