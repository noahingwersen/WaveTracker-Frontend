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
        className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='user-menu-button'
        tabIndex='-1'
        hidden={!showProfileMenu}
        onClick={() => setShowProfileMenu(false)}
      >
        {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
        <Link
          to={`/profile/${user.username}`}
          className='block px-4 py-2 text-sm text-gray-700'
          role='menuitem'
          tabIndex='-1'
          id='user-menu-item-0'
        >
          Your Profile
        </Link>
        <button
          className='block px-4 py-2 text-sm text-gray-700'
          role='menuitem'
          tabIndex='-1'
          id='user-menu-item-1'
          onClick={logoutUser}
        >
          Sign out
        </button>
      </div>
    </div>
  )
}
export default ProfileMenu
