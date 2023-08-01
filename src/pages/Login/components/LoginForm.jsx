import { Link } from 'react-router-dom'
import SubmitButton from '../../../components/SubmitButton'
import { useState } from 'react'
import useAuth from '../../../hooks/useAuth'

const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const { loginUser } = useAuth()
  const submit = async (e) => {
    setLoading(true)
    await loginUser(e)
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
      <div className='mb-2 flex items-center justify-between'>
        <div className='block min-h-[1.5rem] pl-[1.5rem]'>
          <input
            className='relative hover:cursor-pointer float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] rounded-[0.25rem]'
            type='checkbox'
            name='rememberCheck'
            id='rememberCheck'
          />
          <label
            className='inline-block pl-[0.15rem] hover:cursor-pointer'
            htmlFor='rememberCheck'
          >
            Remember me
          </label>
        </div>

        <Link
          className='hover:underline text-gray-500'
          onClick={() =>
            alert(
              "Oops! I haven't figured out how to do this yet. Reach out to me directly if you want to change your password",
            )
          }
        >
          Forgot password?
        </Link>
      </div>
      <SubmitButton
        loading={loading}
        disabled={loading}
        text='Log In'
        className='bg-blue-500 hover:bg-blue-400 disabled:bg-gray-500 text-white mb-4 mt-8 py-2'
      />
    </form>
  )
}
export default LoginForm
