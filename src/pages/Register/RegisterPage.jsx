import BlankForm from '../../components/BlankForm'
import RegisterForm from './components/RegisterForm'

const RegisterPage = () => {
  return <BlankForm header='Create an Account!' form={<RegisterForm />} />
}
export default RegisterPage
