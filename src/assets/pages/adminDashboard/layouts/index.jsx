


import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/sidebar'


const AdmDashboardLayout = () => {
  return (
    <div className="flex overflow-hidden">
        <Sidebar/>
       <div className='bg- w-full '>
       <Outlet/> 
       </div>
    </div>
  )
}

export default AdmDashboardLayout