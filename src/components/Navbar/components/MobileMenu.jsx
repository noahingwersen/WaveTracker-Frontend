import { Link } from 'react-router-dom'

const MobileMenu = () => {
  return (
    <div className='sm:hidden' id='mobile-menu' hidden>
      <div className='space-y-1 px-2 pb-3 pt-2'>
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <Link
          to='/'
          className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
          aria-current='page'
        >
          Home
        </Link>
        <Link
          to='/spots'
          className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
        >
          View
        </Link>
        <Link
          to='/spots/add'
          className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
        >
          Add
        </Link>
        <Link
          to='/analyze'
          className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
        >
          Analyze
        </Link>
      </div>
    </div>
  )
}
export default MobileMenu
