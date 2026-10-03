import { useState } from 'react'
import icon from '../../assets/icon.png'
import { useNavigate } from 'react-router-dom'
import HeaderButton from './HeaderButton'
import HamburgerButton from './HamburgerButton'

const Header = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Giới thiệu', to: '/#intro' },
    { label: 'Khóa học', to: '/#courses' },
    { label: 'Mục tiêu', to: '/#goals' },
    { label: 'Điều kiện', to: '/#conditions' },
    { label: 'Liên hệ', to: '/#footer' }
  ]

  return (
    <div className='fixed top-0 left-0 right-0 z-50 w-full bg-white'>
      <div className='flex justify-between w-2xl p-5'>
        <img
          src={icon}
          className='rounded-full size-16 cursor-pointer border-2 border-transparent transition-all duration-200 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.7)]'
          onClick={() => navigate('/')}
          alt='Home'
        />

        <div className='hidden md:flex gap-2'>
          {links.map((link) => (
            <HeaderButton key={link.to} label={link.label} to={link.to} />
          ))}
        </div>

        <HamburgerButton open={menuOpen} onClick={() => setMenuOpen((prev) => !prev)} />
      </div>

      {menuOpen && (
        <div className='md:hidden flex flex-col items-center gap-2 pb-4' onClick={() => setMenuOpen(false)}>
          {links.map((link) => (
            <HeaderButton key={link.to} label={link.label} to={link.to} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Header
