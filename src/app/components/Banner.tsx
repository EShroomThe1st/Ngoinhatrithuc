import banner from '../../assets/Banner Background.png'
import hero from '../../assets/Banner Hero.png'
import Badge from './CustomBadge'
import CustomTitle from './CustomTitle'

const Banner = () => {
  return (
    <div
      className='flex flex-col md:flex-row pt-10 w-full items-center justify-between px-5 mt-28 bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className='mx-15'>
        <CustomTitle label='Học Tiếng Anh' textSize='text-5xl md:text-8xl' outlineSize='3px_white' smallOutlineSize='2px_white'/>
        <div className='flex justify-between mt-5'>
          <Badge label='Cấp tốc' textSize='text-3xl md:text-7xl' />
          <div className='pl-10'>
            <CustomTitle label='Online - Offline' textSize='text-4xl md:text-6xl' outlineSize='2px_white' smallOutlineSize='2px_white'/>
            <Badge label='Cơ bản đến nâng cao' textSize='text-xl md:text-5xl' />
          </div>
        </div>
      </div>
      <img src={hero} className='h-full mx-auto object-contain' alt='Hero' />
    </div>
  )
}

export default Banner