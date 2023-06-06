import LoginForm from './components/LoginForm'
import { toast } from 'react-toastify'

const LoginPage = () => {
  return (
    <div className="form-wrapper">
      <div className="form-inner">
        <LoginForm />
      </div>
    </div>
  )
}
export default LoginPage
