type HeaderButtonProps = {
  label: string
  onClick?: () => void
}

const HeaderButton = ({ label, onClick }: HeaderButtonProps) => {
  return (
    <button
      className='px-4 py-2 cursor-pointer transition-transform duration-200 hover:text-orange-500 hover:scale-110'
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default HeaderButton