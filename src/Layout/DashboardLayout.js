import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-primary font-bold">
                        {
                            isBuyer && <>
                            <li><Link to='/dashboard/myorders'></Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                            <li><Link to={`dashboard/myproducts/${user?.displayName}`}>My Products</Link></li>
                            <li><Link to='dashboard/addproduct'>Add Product</Link></li>
                            </>
                        }
                        
                        {
                            isAdmin && <>
                                <li><Link to="dashboard/allsellers">All Sellers</Link></li>
                                <li><Link to="dashboard/allbuyers">All Buyers</Link></li>
                                <li><Link to="/dashboard">All Users</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;