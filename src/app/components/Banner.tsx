import banner from '../../assets/Banner Background.png'
import hero from '../../assets/Banner Hero.png'
import Badge from './CustomBadge'
import CustomTitle from './CustomTitle'

const Banner = () => {
  return (
    <div
      className='flex flex-col lg:flex-row pt-10 w-full items-center gap-4 justify-between px-5 mt-28 bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className='mx-15 flex flex-col'>
        <CustomTitle label='Học Tiếng Anh' textSize='text-4xl md:text-7xl lg:text-5xl xl:text-7xl' stroke='sm' />

        <div className='flex items-center gap-4 mt-5'>
          <Badge label='Cấp tốc' fontSize={{ xs: '1rem', md: '1.75rem', lg: '2.5rem' }} />

          <div className='flex flex-col gap-2'>
            <CustomTitle label='Online - Offline' textSize='text-xl md:text-4xl lg:text-3xl xl:text-5xl' stroke='sm' />
            <div className='mt-4'>
              <Badge label='Cơ bản đến nâng cao' fontSize={{ xs: '0.75rem', md: '1.25rem', lg: '1.5rem' }} />
            </div>
          </div>
        </div>
      </div>

      <img src={hero} className='h-full mx-auto object-contain' alt='Hero' />
    </div>
  )
}

export default Banner
