import { Link } from 'react-router-dom'

const RegisterForm = ({ loading, submit }) => {
  return (
    <form onSubmit={submit}>
      <h3>Sign Up! </h3>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          required
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          required
        />
      </div>
      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          name="firstName"
          required
        />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          name="lastName"
          required
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          required
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          Register
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered? <Link to="/login">Log in</Link>
      </p>
    </form>
  )
}
export default RegisterForm
