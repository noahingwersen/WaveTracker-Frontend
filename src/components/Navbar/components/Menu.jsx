import { Link } from 'react-router-dom'
import { useState } from 'react'

const Menu = () => {
  const [showViewDropdown, setShowViewDropdown] = useState(false)
  const [showAddDropdown, setShowAddDropdown] = useState(false)

  return (
    <div className='hidden sm:ml-6 sm:block'>
      <div className='flex space-x-4'>
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <Link
          to='/'
          className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
        >
          Home
        </Link>
        <div
          className='flex'
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setShowViewDropdown(false)
            }
          }}
        >
          <button
            className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
            onClick={() => setShowViewDropdown(!showViewDropdown)}
          >
            View
          </button>
          <div
            className='absolute top-12 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
            hidden={!showViewDropdown}
          >
            <ul
              className='text-sm text-gray-700 dark:text-gray-400'
              onClick={() => setShowViewDropdown(false)}
            >
              <li>
                <Link
                  to='/spots'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Surf Spots
                </Link>
              </li>
              <li>
                <Link
                  to='/sessions'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Surf Sessions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className='flex'
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setShowAddDropdown(false)
            }
          }}
        >
          <button
            className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
            onClick={() => {
              setShowAddDropdown(!showAddDropdown)
            }}
          >
            Add
          </button>
          <div
            className='absolute top-12 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
            hidden={!showAddDropdown}
          >
            <ul
              className='text-sm text-gray-700 dark:text-gray-400'
              onClick={() => setShowAddDropdown(false)}
            >
              <li>
                <Link
                  to='/spots/add'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  New Surf Spot
                </Link>
              </li>
              <li>
                <Link
                  to='/sessions/add'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  New Surf Session
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link
          to='/analyze'
          className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
        >
          Analyze
        </Link>
      </div>
    </div>
  )
}
export default Menu
