import IntroCard from './IntroCard'
import Badge from './CustomBadge';
import { introData } from '../data/introData';



const Intro = () => {
  return (
    <div id="intro" className='flex flex-col items-center my-10'>
      <h1 className=' text-3xl lg:text-5xl font-bold text-amber-950 '>CHINH PHỤC TIẾNG ANH</h1>
      <div className='mt-10'>
        <Badge label='TỪ 0 ĐẾN TINH THÔNG' text='white' fontSize="clamp(1rem, 2vw, 2rem)"/>
      </div>
      <div className='grid grid-cols-1 2xl:grid-cols-3 gap-6'>
        {introData.map((item) => (
          <IntroCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  )
}

export default Intro
