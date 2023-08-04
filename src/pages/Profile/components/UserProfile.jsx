import { useEffect } from 'react'
import useApiData from '../../../hooks/useApiData'
import SubmitButton from '../../../components/SubmitButton'
import useAuth from '../../../hooks/useAuth'
import LoadingSpinner from '../../../components/LoadingSpinner'

const UserProfile = () => {
  const { user } = useAuth()
  const [profileData, loading, error] = useApiData(
    `/api/profiles/profile/${user.username}/`,
    'Unable to load profile data',
  )

  useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='min-w-[500px] rounded-xl bg-white flex flex-col px-14 py-8 items-center'>
        <img
          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          className='rounded-full w-60 h-60 object-cover my-4'
        />
        <form>
          <div className='my-4'>
            <label htmlFor='nameInput' className='text-lg'>
              Name
            </label>
            <input
              type='text'
              className='w-full rounded border py-1 px-2 mt-2'
              defaultValue={
                profileData &&
                `${profileData.first_name} ${profileData.last_name}`
              }
              id='nameInput'
              name='name'
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
              defaultValue={profileData && profileData.email}
              id='emailInput'
              name='email'
              required
            />
          </div>
          <SubmitButton
            text='Update'
            className='w-full bg-green-500 hover:bg-green-400 disabled:bg-gray-500 text-white mb-4 mt-8 py-2'
            disabled={true}
          />
        </form>
      </div>
    </div>
  )
}
export default UserProfile
