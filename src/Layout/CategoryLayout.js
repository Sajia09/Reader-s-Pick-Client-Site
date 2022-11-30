import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const CategoryLayout = () => {
    const url = 'https://readers-pick-server-site.vercel.app/category';

    const { data: categories = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            return data;
        }
    })
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-row'>
            <div className='basis-1/4 sm:hidden md:block lg:block'>
                <h3 className="text-3xl font-bold">All Categories</h3>
                 <ul>
                    {
                        categories.map(category =><li className='text-2xl font-semibold hover:'><Link to={`/category/${category.name}`}>{category.name}</Link></li>)
                    }
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

export default CategoryLayout;