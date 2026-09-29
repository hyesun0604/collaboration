// 접힌 옷 썸네일을 대신하는 아이콘형 플레이스홀더 (실제 서비스에서는 촬영 사진이 표시됨)
const PALETTES = {
  blazer: ['#D9CBB4', '#C2AE8E'],
  shirt: ['#F4F1EC', '#DAD5CC'],
  pants: ['#4B4B4E', '#33333A'],
  cardigan: ['#2F3A55', '#232B40'],
  tshirt: ['#E7ECF2', '#B9C6D6'],
  denim: ['#3B4A66', '#2A3650'],
  dress: ['#22201F', '#0F0E0D'],
}

export default function ClothingThumb({ image, className = '' }) {
  const [c1, c2] = PALETTES[image] || ['#DDD6CB', '#C9C0B2']
  return (
    <div
      className={`rounded-xl2 flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
    >
      <div className="w-1/2 h-1/2 rounded-md bg-white/15" />
    </div>
  )
}
