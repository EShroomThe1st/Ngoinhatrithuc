import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../redux/hook'
import { PATHS } from './paths'

interface PublicRouteProps {
  redirectTo?: string
}

export default function PublicRoute({ redirectTo = PATHS.HOME }: PublicRouteProps) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace />
  }

  return <Outlet />
}
