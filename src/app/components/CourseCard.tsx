import banner from '../../assets/Banner Background.png'
import type { CourseCardProps, CourseSize } from '../models/CourseModel'
import Badge from './CustomBadge'
import CustomTitle from './CustomTitle'

const sizeStyles: Record<
  CourseSize,
  {
    card: string
    bannerPadding: string
    leftColumn: string
    title: string
    metaRow: string
    badgeFont: string
    format: string
    hero: string
    detailsList: string
    detailItem: string
  }
> = {
  default: {
    card: 'w-full rounded-3xl',
    bannerPadding: 'pt-2',
    leftColumn: 'mx-10',
    title: 'text-3xl lg:text-5xl',
    metaRow: 'gap-4 mt-5',
    badgeFont: '2rem',
    format: 'text-2xl lg:text-3xl',
    hero: 'w-40 h-40 md:w-72 md:h-72',
    detailsList: 'py-10 px-8',
    detailItem: 'text-xl my-2',
  },
  sml: {
    card: 'w-full rounded-2xl',
    bannerPadding: 'pt-1',
    leftColumn: 'mx-6',
    title: 'text-3xl',
    metaRow: 'gap-2 mt-2',
    badgeFont: '1rem',
    format: 'text-2xl',
    hero: 'w-24 h-24 md:w-40 md:h-40',
    detailsList: 'py-4 px-10',
    detailItem: 'text-lg my-1',
  },
}

const CourseCard = ({ course, size = 'default' }: CourseCardProps) => {
  const s = sizeStyles[size]

  return (
    <div
      className={`flex flex-col bg-white h-1/2 overflow-hidden mx-5 shadow-2xl ${s.card}`}
    >
      <div
        className={`flex flex-row items-center justify-center md:justify-between bg-cover bg-center bg-no-repeat ${s.bannerPadding}`}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className={`flex flex-col my-5 lg:my-0 ${s.leftColumn}`}>
          <CustomTitle
            label={course.title}
            textSize={s.title}
            stroke='sm'
          />

          <div className={`flex items-center ${s.metaRow}`}>
            <Badge label={course.duration} fontSize={s.badgeFont} />
            <div className='whitespace-nowrap shrink-0'>
              <CustomTitle
                label={course.format}
                textSize={s.format}
                stroke='sm'
              />
            </div>
          </div>
        </div>

        <div className='hidden md:flex'>
          <img
            src={course.hero}
            className={`mx-auto object-contain ${s.hero}`}
            alt='Hero'
          />
        </div>
      </div>

      <ul className={`flex flex-col text-left list-disc ${s.detailsList}`}>
        {course.details.map((item) => (
          <li key={item} className={s.detailItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseCard