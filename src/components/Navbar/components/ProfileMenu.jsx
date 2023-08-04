import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const ProfileMenu = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const { user, logoutUser } = useAuth()

  return (
    <div
      className='relative ml-3'
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setShowProfileMenu(false)
        }
      }}
    >
      <div>
        <button
          type='button'
          onClick={() => setShowProfileMenu(!showProfileMenu)}
          className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
          id='user-menu-button'
          aria-expanded='false'
          aria-haspopup='true'
        >
          <span className='absolute -inset-1.5'></span>
          <span className='sr-only'>Open user menu</span>
          <img
            className='h-8 w-8 rounded-full'
            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt=''
          />
        </button>
      </div>

      {/* <!--
  Dropdown menu, show/hide based on menu state.

  Entering: "transition ease-out duration-100"
    From: "transform opacity-0 scale-95"
    To: "transform opacity-100 scale-100"
  Leaving: "transition ease-in duration-75"
    From: "transform opacity-100 scale-100"
    To: "transform opacity-0 scale-95"
--> */}
      <div
        className='absolute right-0 z-10 font-normal shadow rounded-lg w-44 bg-gray-700 text-gray-300 divide-y divide-gray-500'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='user-menu-button'
        tabIndex='-1'
        hidden={!showProfileMenu}
        onClick={() => setShowProfileMenu(false)}
      >
        <div>
          <Link
            to={`/profile/${user.username}`}
            className='block px-4 py-2 text-sm hover:bg-gray-600 hover:text-white rounded-t-lg'
          >
            Your Profile
          </Link>
          <Link
            to='/settings'
            className='block px-4 py-2 text-sm hover:bg-gray-600 hover:text-white'
          >
            Settings
          </Link>
        </div>
        <button
          className='w-full text-left block px-4 py-2 text-sm hover:bg-gray-600 hover:text-white rounded-b-lg'
          onClick={logoutUser}
        >
          Sign out
        </button>
      </div>
    </div>
  )
}
export default ProfileMenu
