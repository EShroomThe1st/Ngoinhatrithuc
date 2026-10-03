import { useNavigate, useLocation } from 'react-router-dom'

type HeaderButtonProps = {
  label: string
  to: string
}

const HeaderButton = ({ label, to }: HeaderButtonProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    if (to.startsWith('/#')) {
      const id = to.slice(2)
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 0)
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(to)
    }
  }

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 rounded-lg font-semibold text-amber-950 hover:bg-orange-100 transition-colors"
    >
      {label}
    </button>
  )
}

export default HeaderButton