import type { GoalCardProps } from "../models/GoalModel"

const GoalCard = ({ index, title, description }: GoalCardProps) => {
  return (
    <div className='flex bg-amber-800 rounded-2xl overflow-hidden min-h-40 mx-15 shadow-2xl'>
      <h2 className='flex items-center justify-center text-white text-5xl font-bold px-6 border-r-4 shrink-0'>
        {index}
      </h2>
      <div className='text-left flex flex-col justify-start py-4 px-4'>
        <h3 className='text-amber-950 text-2xl font-bold'>{title}</h3>
        <p className='text-white text-lg'>{description}</p>
      </div>
    </div>
  )
}

export default GoalCard