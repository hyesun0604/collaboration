export default function PhoneFrame({ children }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#EDE8E1] py-8">
      <div className="w-[390px] h-[820px] bg-cream rounded-[2.5rem] shadow-2xl border border-black/5 overflow-hidden flex flex-col relative">
        {children}
      </div>
    </div>
  )
}
