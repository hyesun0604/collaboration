import { NavLink } from 'react-router-dom'
import { CalendarDays, Shirt, PlusCircle } from 'lucide-react'

const tabs = [
  { to: '/', label: '캘린더 코디', icon: CalendarDays },
  { to: '/closet', label: '내 옷장', icon: Shirt },
  { to: '/register', label: '옷 등록', icon: PlusCircle },
]

export default function BottomNav() {
  return (
    <nav className="border-t border-black/5 bg-card px-6 py-2 flex justify-between">
      {tabs.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 py-1.5 px-3 rounded-xl text-[11px] transition-colors ${
              isActive ? 'text-maroon' : 'text-muted'
            }`
          }
        >
          <Icon size={20} strokeWidth={2} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
