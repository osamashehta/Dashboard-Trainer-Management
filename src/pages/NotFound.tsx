import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='text-2xl font-semibold w-screen h-screen flex gap-4 justify-center items-center text-emerald-700'>
        <p >The page you are looking for is not found</p>
        <Link to={"/"} className="text-blue-600 underline">Home page</Link>
    </div>
  )
}

export default NotFound