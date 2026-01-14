import { Search } from 'lucide-react'

const SearchBox = () => {
  return (
    <form className='relative'>
      <input
        type="text"
        placeholder="Search..."
        className="md:w-100 w-full px-4 py-2 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className='absolute top-3 right-2 hover:text-blue-500 cursor-pointer'>
        {/* search icon use lucide icon */}
        <Search size={20} />
      
      </button>

    </form>
  )
}

export default SearchBox