import { useNavigate } from 'react-router-dom'
import Messenger from '../../assets/Messenger.png'
import Zalo from '../../assets/Zalo.png'
import Phone from '../../assets/Phone.png'

const isMobile = () =>
  /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent
  )

const FloatingButtons = () => {
  const navigate = useNavigate()

  const buttons = [
    {
      alt: 'Messenger',
      src: Messenger,
      onClick: () => navigate('/'),
      bg: 'bg-gradient-to-br from-[#00B2FF] to-[#006AFF]',
    },
    {
      alt: 'Zalo',
      src: Zalo,
      onClick: () => navigate('/'),
      bg: 'bg-white',
    },
    {
      alt: 'Call',
      src: Phone,
      onClick: () => {
        if (isMobile()) {
          window.location.href = 'tel:0962036687'
        } else {
          navigate('/')
        }
      },
      bg: 'bg-gradient-to-br from-[#0A84FF] to-[#0033CC]',
    },
  ]

  return (
    <div className='fixed right-4 bottom-6 z-50 flex flex-col gap-4'>
      {buttons.map((b) => (
        <img
          key={b.alt}
          src={b.src}
          alt={b.alt}
          onClick={b.onClick}
          className={`w-14 h-14 rounded-full border-4 border-gray-300 shadow-lg
                      object-contain cursor-pointer
                      transition-transform duration-200 hover:scale-110 ${b.bg}`}
        />
      ))}
    </div>
  )
}

export default FloatingButtons