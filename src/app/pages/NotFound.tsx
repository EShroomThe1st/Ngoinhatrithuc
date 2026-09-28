import { Link } from 'react-router-dom'
import { PATHS } from '../routes/paths'

export default function NotFound() {
  return (
    <div>
      <h1>404 — Not Found</h1>
      <Link to={PATHS.HOME}>Go home</Link>
    </div>
  )
}
