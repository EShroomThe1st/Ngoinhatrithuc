type HamburgerButtonProps = {
  open: boolean
  onClick: () => void
}

const HamburgerButton = ({ open, onClick }: HamburgerButtonProps) => {
  return (
    <button
      className={`lg:hidden cursor-pointer p-2 transition-all duration-200 ${
        open
          ? 'text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]'
          : 'text-current hover:text-orange-500 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]'
      }`}
      onClick={onClick}
      aria-label='Toggle menu'
      aria-expanded={open}
    >
      <svg className='size-8' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
        {open ? (
          <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
        ) : (
          <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
        )}
      </svg>
    </button>
  )
}

export default HamburgerButton