import type { CourseInfo } from "../models/CourseModel";
import HeroA from '../../assets/Card Hero A.png'
import HeroB from '../../assets/Card Hero B.png'
import HeroC from '../../assets/Card Hero C.png'
import HeroD from '../../assets/Card Hero D.png'
import HeroE from '../../assets/Card Hero E.png'

export const specCourses: CourseInfo[] = [
  {
    id: 'a',
    title: 'Khóa học A',
    duration: '3 tháng',
    format: 'Online - Offline',
    hero: HeroA,
    details: [
      'Số buổi học: 32 buổi (120 phút/buổi)',
      'Mục tiêu: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      'Ứng dụng: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
    ]
  },
  {
    id: 'b',
    title: 'Khóa học B',
    duration: '6 tháng',
    format: 'Online',
    hero: HeroB,
    details: [
      'Số buổi học: 64 buổi (90 phút/buổi)',
      'Mục tiêu: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      'Ứng dụng: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
    ]
  }
]

export const courses: CourseInfo[] = [
  {
    id: 'c',
    title: 'Khóa học C',
    duration: '3 tháng',
    format: 'Online - Offline',
    hero: HeroC,
    details: [
      'Số buổi học: 32 buổi (120 phút/buổi)',
      'Mục tiêu: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      'Ứng dụng: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
    ]
  },
  {
    id: 'd',
    title: 'Khóa học D',
    duration: '6 tháng',
    format: 'Online',
    hero: HeroD,
    details: [
      'Số buổi học: 64 buổi (90 phút/buổi)',
      'Mục tiêu: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      'Ứng dụng: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
    ]
  },
  {
    id: 'e',
    title: 'Khóa học E',
    duration: '6 tháng',
    format: 'Online',
    hero: HeroE,
    details: [
      'Số buổi học: 64 buổi (90 phút/buổi)',
      'Mục tiêu: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      'Ứng dụng: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
    ]
  }
]