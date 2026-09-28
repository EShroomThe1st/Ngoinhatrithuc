import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/hook'
import { login } from '../redux/slices/authSlices'
import { PATHS } from '../routes/paths'

export default function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const from = (location.state as { from?: Location })?.from?.pathname || PATHS.HOME

  const handleLogin = () => {
    dispatch(
      login({
        user: { id: '1', name: 'Jane Doe', email: 'jane@example.com' },
        token: 'fake-jwt-token'
      })
    )
    navigate(from, { replace: true })
  }

  return (
    <div>
      <h1>Login</h1>
      <button type="button" onClick={handleLogin}>
        Log in
      </button>
    </div>
  );
}