import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    console.log(user.role);
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-row'>
            <div className='basis-1/4 sm:hidden md:block lg:block'>
                 <ul className="text-3xl font-bold">
                    
                 </ul>
            </div>
            <div className='basis-3/4'>
                <Outlet></Outlet>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;