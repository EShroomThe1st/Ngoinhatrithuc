import { goals } from '../data/goalData'
import GoalCard from './GoalCard'

const Goals = () => {
  const columns = [goals.slice(0, 3), goals.slice(3, 6)]

  return (
    <div id='goals' className='mt-15'>
      <h1 className=' text-3xl lg:text-5xl font-bold text-sky-950 '>BẠN NHẬN ĐƯỢC GÌ</h1>
      <h1 className=' text-3xl lg:text-5xl font-bold text-sky-700 '>KHI THAM GIA KHÓA HỌC CỦA CHÚNG TÔI</h1>

      <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 mx-5 mt-10'>
        {columns.map((column, colIdx) => (
          <div key={colIdx} className='flex flex-col gap-6'>
            {column.map((g) => (
              <GoalCard key={g.index} {...g} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Goals
