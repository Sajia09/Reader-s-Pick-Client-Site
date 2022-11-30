import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(err => console.log(err));
  }
    const navItem = 
    <>
    <li><Link to='/'>Home</Link></li>
    
    { user?.uid?
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to='/category'>Category</Link></li>
                <li><Link to='/sellerdashboard'>Seller Dashboard</Link></li>
                
            </>
            : <li><Link to='/blog'>Blog</Link></li>}
    </>
    return (
        <div className="navbar bg-base-100 sticky top-0 z-30">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-secondary font-bold">
              {navItem}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-2xl text-primary font-bold" to='/' >Reader's Pick</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-primary font-bold ">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end">
          { user?.uid?
            <button className='btn btn-primary' onClick={handleLogOut}>Sign out</button>
            :
            <Link to='login' className="btn btn-primary">Login</Link>
          }
        </div>
      </div>
    );
};

export default Navbar;