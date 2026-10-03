import banner from '../../assets/Banner Background.png'
import hero from '../../assets/Banner Hero.png'
import Badge from './CustomBadge'
import CustomTitle from './CustomTitle'

const Banner = () => {
  return (
    <div
      className="flex flex-col md:flex-row pt-10 w-full items-center justify-between px-5 mt-28 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="mx-15 flex flex-col">
        <CustomTitle
          label="Học Tiếng Anh"
          textSize="text-5xl md:text-8xl"
          stroke='md'
        />

        <div className="flex items-center gap-4 mt-5">
          <Badge
            label="Cấp tốc"
            fontSize="clamp(1.5rem, 4vw, 3rem)"
          />

          <div className="flex flex-col gap-2">
            <CustomTitle
              label="Online - Offline"
              textSize="text-4xl md:text-6xl"
              stroke='md'
            />
            <div>
              <Badge
                label="Cơ bản đến nâng cao"
                fontSize="clamp(1rem, 2vw, 2rem)"
              />
            </div>
          </div>
        </div>
      </div>

      <img src={hero} className="h-full mx-auto object-contain" alt="Hero" />
    </div>
  )
}

export default Banner