import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CategoryCard from './CategoryCard';

const Category = () => {
    const url = 'http://localhost:5000/category';

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
        <div className='mt-20'>
            <h1 className="text-4xl font-bold text-center mt-10">Explore Book Category</h1>
            <p className='text-center font-bold text-primary my-4 mx-20'>Explore our popular and on demanded books of your favorite writer.One of the largest and most authoritative collections of online journals, books, and research resources, covering life, health, social, and physical ...</p>
            <div className='grid gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categories.map(category =><CategoryCard
                key={category._id}
                category={category}
                ></CategoryCard>)
            }
        </div>
        </div>
    );
};

export default Category;