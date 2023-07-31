import BlankForm from '../../components/BlankForm'
import LoginForm from './components/LoginForm'

const LoginPage = () => {
  return <BlankForm header='Welcome Back!' form={<LoginForm />} />
}
export default LoginPage
