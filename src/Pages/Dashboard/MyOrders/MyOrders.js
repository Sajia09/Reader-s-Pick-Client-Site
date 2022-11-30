import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyOrders = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://readers-pick-server-site.vercel.app/books');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            
        </div>
    );
};

export default MyOrders;