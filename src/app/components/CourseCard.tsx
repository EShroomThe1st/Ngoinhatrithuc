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
    card: 'w-3xl rounded-3xl',
    bannerPadding: 'pt-2',
    leftColumn: 'mx-10',
    title: 'text-3xl md:text-5xl',
    metaRow: 'gap-4 mt-5',
    badgeFont: '2rem',
    format: 'text-2xl md:text-3xl',
    hero: 'h-24 md:h-80',
    detailsList: 'py-10 px-8',
    detailItem: 'text-xl my-2',
  },
  sml: {
    card: 'w-lg rounded-2xl',
    bannerPadding: 'pt-1',
    leftColumn: 'mx-6',
    title: 'text-3xl',
    metaRow: 'gap-2 mt-2',
    badgeFont: '1rem',
    format: 'text-2xl',
    hero: 'h-48',
    detailsList: 'py-4 px-10',
    detailItem: 'text-md my-1',
  },
}

const CourseCard = ({ course, size = 'default' }: CourseCardProps) => {
  const s = sizeStyles[size]

  return (
    <div
      className={`flex flex-col bg-white h-1/2 overflow-hidden mx-5 shadow-2xl ${s.card}`}
    >
      <div
        className={`flex flex-row items-center justify-between bg-cover bg-center bg-no-repeat ${s.bannerPadding}`}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className={`flex flex-col ${s.leftColumn}`}>
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

        <img
          src={course.hero}
          className={`mx-auto object-contain ${s.hero}`}
          alt='Hero'
        />
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