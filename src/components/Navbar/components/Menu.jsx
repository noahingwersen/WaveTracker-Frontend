import { Link } from 'react-router-dom'

const Menu = () => {
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
        <Link
          to='/spots'
          className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
        >
          View
        </Link>
        <Link
          to='/spots/add'
          className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
        >
          Add
        </Link>
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
