import { useState, useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { Circles } from 'react-loader-spinner'
import RegisterForm from './components/RegisterForm'

const RegisterPage = () => {
  const [loading, setLoading] = useState(false)
  const { registerUser } = useContext(AuthContext)

  const submit = async (e) => {
    setLoading(true)
    try {
      await registerUser(e)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <div className="form-wrapper">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperClass="loader"
        visible={loading}
      />
      <div className="form-inner">
        <RegisterForm loading={loading} submit={submit} />
      </div>
    </div>
  )
}
export default RegisterPage
