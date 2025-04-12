import { Outlet } from 'react-router-dom'
import SideMenu from './SideMenu'

const Layout = () => {
  return (
    <div className='grid grid-cols-12   bg-[#F9FAFB]'>
   

    
    <SideMenu/>

    <main className='col-span-12 md:col-span-10 ml-[40px] md:ml-0'>
      <Outlet/>
    </main>
    </div>
  )
}

export default Layout