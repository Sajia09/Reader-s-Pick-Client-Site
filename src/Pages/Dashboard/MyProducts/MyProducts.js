import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyProducts = () => {
    
    const books = useLoaderData();
    return (
        <div>
            <h2 className="text-3xl text-primary font-bold mb-1">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.sellingPrice}</td>
                                <td>{user?.status}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;