import Chip from '@mui/material/Chip'

type BadgeProps = {
  label: string
  bg?: string
  text?: string
  fontSize?: string | { xs?: string; md?: string; lg?: string }
  className?: string
}

const Badge = ({
  label,
  bg = '#451a03',
  text = '#f97316',
  fontSize = '1rem',
  className,
}: BadgeProps) => {
  return (
    <Chip
      label={label}
      className={className}
      sx={{
        backgroundColor: bg,
        color: text,
        fontSize, // MUI sx handles responsive objects automatically
        fontWeight: 'bold',
        borderRadius: '1rem',
        boxShadow: 6,
        height: 'auto',
        width: 'fit-content',
        '& .MuiChip-label': {
          px: 2,
          py: 1,
        },
        '&:hover': { backgroundColor: bg },
      }}
    />
  )
}

export default Badge