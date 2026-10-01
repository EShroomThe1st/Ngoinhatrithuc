import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '../redux/hook'
import { PATHS } from './paths'

interface PrivateRouteProps {
  redirectTo?: string
}

export default function PrivateRoute({ redirectTo = PATHS.HOME }: PrivateRouteProps) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
  const location = useLocation()

  if (!isAuthenticated) {
    // Remember where the user was going, so we can send them back after login
    return <Navigate to={redirectTo} state={{ from: location }} replace />
  }

  return <Outlet />
}
