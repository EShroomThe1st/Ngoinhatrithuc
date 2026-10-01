import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { PATHS } from './paths'

import Home from '../pages/Home'
// import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public-only routes (redirect if logged in) */}
      <Route element={<PublicRoute />}>
        <Route path={PATHS.HOME} element={<Home />} />
      </Route>

      {/* Private routes (redirect to login if not authenticated) */}
      <Route element={<PrivateRoute />}>
        <Route path={PATHS.HOME} element={<Home />} />
      </Route>

      {/* Catch-all */}
      <Route path={PATHS.NOT_FOUND} element={<NotFound />} />
    </Routes>
  )
}
