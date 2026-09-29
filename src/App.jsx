import { Routes, Route } from 'react-router-dom'
import PhoneFrame from './components/PhoneFrame.jsx'
import BottomNav from './components/BottomNav.jsx'
import CalendarPage from './pages/CalendarPage.jsx'
import ClosetPage from './pages/ClosetPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

export default function App() {
  return (
    <PhoneFrame>
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <Routes>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/closet" element={<ClosetPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
      <BottomNav />
    </PhoneFrame>
  )
}
