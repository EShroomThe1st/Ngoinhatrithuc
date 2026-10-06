import { courses, specCourses } from '../data/courseData'
import CourseCard from './CourseCard'
import Badge from './CustomBadge'

const Course = () => {
  return (
    <div
      id='courses'
      className='flex flex-col items-center w-full bg-sky-600 py-10 mt-10'
    >
      <h1 className='text-5xl font-bold text-white text-center px-4'>
        LỘ TRÌNH HỌC TỐI ƯU HÓA
      </h1>

      <div className='mt-10 w-full px-4'>
        <Badge
          label='THEO TỪNG MỤC TIÊU'
          text='white'
          fontSize='clamp(1rem, 2vw, 2rem)'
        />

        {/* specCourses — row on desktop, column on mobile */}
        <div className='hidden xl:flex xl:flex-row lg:justify-around items-center gap-6 mt-5'>
          {specCourses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
        <div className='flex flex-col xl:hidden items-center gap-6 mt-5'>
          {specCourses.map((c) => (
            <CourseCard key={c.id} course={c} size='sml' />
          ))}
        </div>

        {/* courses — row on desktop, column on mobile */}
        <div className=' flex flex-col xl:flex-row xl:justify-between items-center gap-6 mt-5'>
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} size='sml' />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Course