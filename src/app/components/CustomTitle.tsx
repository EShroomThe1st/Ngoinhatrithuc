type CustomTitleProps = {
  label: string
  textSize?: string
  outlineSize?: string
  smallOutlineSize?: string
}

const CustomTitle = ({ label, textSize, outlineSize, smallOutlineSize }: CustomTitleProps) => {
  return (
    <span
      className={`text-amber-950 ${textSize} font-bold italic [-webkit-text-stroke:${smallOutlineSize}] md:[-webkit-text-stroke:${outlineSize}]`}
    >
      {label}
    </span>
  )
}

export default CustomTitle
