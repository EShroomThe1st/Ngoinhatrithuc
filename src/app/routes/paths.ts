export const PATHS = {
  HOME: '/',
  LOGIN: '/login',
  NOT_FOUND: '*'
} as const

export type AppPath = (typeof PATHS)[keyof typeof PATHS]
