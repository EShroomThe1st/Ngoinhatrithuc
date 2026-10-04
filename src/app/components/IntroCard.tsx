
import type { ReactNode } from 'react';

type IntroCardProps = {
  title: string
  description: string
  icon: ReactNode
}

const IntroCard = ({ title, description, icon }: IntroCardProps) => {
  return (
    <div className="relative flex flex-col justify-start items-center bg-amber-700 rounded-2xl mx-5 lg:mx-28 p-10 mt-20 shadow-2xl">
      <div className='absolute -top-14 left-1/2 -translate-x-1/2 w-fit rounded-4xl bg-amber-950 p-4  border-white border-4'>{icon}</div>
      <text className="text-2xl text-amber-950 font-bold mt-4">{title}</text>
      <text className="text-white">{description}</text>
    </div>
  )
}

export default IntroCard