const strokeMap: Record<string, string> = {
  'sm': '[-webkit-text-stroke:1px_white]',
  'md': '[-webkit-text-stroke:2px_white]',
  'lg': '[-webkit-text-stroke:3px_white]',
}

type CustomTitleProps = {
  label: string
  textSize?: string
  stroke?: keyof typeof strokeMap
}

const CustomTitle = ({ label, textSize, stroke = 'md' }: CustomTitleProps) => (
  <span
    className={`text-blue-950 ${textSize} font-bold italic ${strokeMap[stroke]}`}
  >
    {label}
  </span>
)

export default CustomTitle