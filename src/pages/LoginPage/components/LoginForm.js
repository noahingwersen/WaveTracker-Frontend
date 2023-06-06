import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import AuthContext from '../../../context/AuthContext'

const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const { loginUser } = useContext(AuthContext)
  const submit = async (e) => {
    setLoading(true)
    await loginUser(e)
    setLoading(false)
  }

  return (
    <form onSubmit={submit}>
      <h3>Welcome Back!</h3>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          name="username"
          autoComplete="on"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          autoComplete="on"
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="rememberCheck"
            name="saveToken"
          />
          <label className="custom-control-label" htmlFor="rememberCheck">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          Log In
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <Link to="/login">password?</Link>
      </p>
    </form>
  )
}
export default LoginForm
