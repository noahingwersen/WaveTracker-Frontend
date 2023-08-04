import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import SubmitButton from '../../../components/SubmitButton'

const RegisterForm = () => {
  const [loading, setLoading] = useState(false)
  const { registerUser } = useAuth()
  const submit = async (e) => {
    setLoading(true)
    await registerUser(e)
    setLoading(false)
  }

  return (
    <form onSubmit={submit}>
      <div className='my-4'>
        <label htmlFor='usernameInput' className='text-lg'>
          Username
        </label>
        <input
          type='text'
          className='w-full rounded border py-1 px-2 mt-2'
          id='usernameInput'
          name='username'
          required
        />
      </div>
      <div className='my-4'>
        <label htmlFor='emailInput' className='text-lg'>
          Email
        </label>
        <input
          type='email'
          className='w-full rounded border py-1 px-2 mt-2'
          id='emailInput'
          name='email'
          required
        />
      </div>
      <div className='my-4'>
        <label htmlFor='firstNameInput' className='text-lg'>
          First Name
        </label>
        <input
          type='text'
          className='w-full rounded border py-1 px-2 mt-2'
          id='firstNameInput'
          name='firstName'
          required
        />
      </div>
      <div className='my-4'>
        <label htmlFor='lastNameInput' className='text-lg'>
          Last Name
        </label>
        <input
          type='text'
          className='w-full rounded border py-1 px-2 mt-2'
          id='lastNameInput'
          name='lastName'
          required
        />
      </div>
      <div className='my-4'>
        <label htmlFor='passwordInput' className='text-lg'>
          Password
        </label>
        <input
          type='password'
          className='w-full rounded border py-1 px-2 mt-2'
          id='passwordInput'
          name='password'
          autoComplete='current-password'
          required
        />
      </div>
      <SubmitButton
        loading={loading}
        disabled={loading}
        text='Register'
        className='w-full bg-green-500 hover:bg-green-400 disabled:bg-gray-500 text-white mb-4 mt-8 py-2'
      />
      <div className='text-right text-sm'>
        <p className='text-gray-500'>
          Already have an account?{' '}
          <Link className='hover:underline text-blue-500' to='/login'>
            Log in
          </Link>
        </p>
      </div>
    </form>
  )
}
export default RegisterForm
