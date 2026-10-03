export type CourseSize = 'default' | 'sml'

export type CourseInfo = {
  id: string
  title: string
  duration: string
  format: string
  hero?: string
  details: string[]
}

export type CourseCardProps = {
  course: CourseInfo
  size?: CourseSize
}