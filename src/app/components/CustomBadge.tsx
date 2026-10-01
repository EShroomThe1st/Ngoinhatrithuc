type BadgeProps = {
  label: string
  bg?: string
  text?: string
  textSize?: string
}


const Badge = ({
  label,
  bg = 'bg-amber-950',
  text = 'text-orange-500',
  textSize,
}: BadgeProps) => {
  return (
    <div className={`w-fit flex items-center ${bg} px-2 py-4 mt-5 ${text} ${textSize} font-bold rounded-2xl shadow-2xl`}>
      {label}
    </div>
  )
}

export default Badge