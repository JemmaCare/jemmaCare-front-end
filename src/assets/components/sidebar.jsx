import { ArrowTopRightOnSquareIcon, BuildingStorefrontIcon, CalendarDaysIcon, PhotoIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { CreditCardIcon } from '@heroicons/react/24/outline';
import { LogOut, UserCheck } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className='min-h-full max-h-screen flex'>
            <div className="m-4 bg-black border border-white h-full shadow-lg w-64 flex flex-col justify-between rounded-xl">
                <h3 className='text-teal-500 text-xl font-bold mt-10 ml-5'>Jemma Care</h3>
                <div className="flex py-6">
                    <ul className="space-y-2 w-full">

                       

                        <Link to='/admdashboard'>
                            <li className="flex items-center text-white text-[18px] space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <UserCircleIcon size className='size-8' />
                                <span>Overview</span>
                            </li>
                        </Link>
                        <Link to='/admdashboard/therapists'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <CreditCardIcon size className='size-7' />
                                <span>Therapists</span>
                            </li>
                        </Link>

                        <Link to='/admdashboard/support'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                < UserCheck className=' hover:text-black' />

                                <span>Support</span>
                            </li>
                        </Link>

                        <Link to='/admdashboard/reviews'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <ShoppingBagIcon size className='size-7' />
                                <span>Testimonials</span>
                            </li>
                        </Link>
                        <Link to='/admdashboard/user'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <PhotoIcon size className='size-7' />
                                <span>User</span>
                            </li>
                        </Link>
                        <Link to='/admdashboard/articles'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <CalendarDaysIcon size className='size-7' />
                                <span>Articles</span>
                            </li>
                        </Link>
                       

                    </ul>
                </div>
                <Link to="/">
                    <div className='flex justify-between flex-row px-4 py-2 bg-white rounded-b-xl text-[#304A70]'>
                        <span>Logout</span>
                        <LogOut />
                    </div>
                </Link>


            </div>
        </div>
    );
}
export default Sidebar