
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from './BookCard';

const CategoryBookCollection = () => {
    const categoryBooks = useLoaderData();
    console.log(categoryBooks);
    return (
        <div>
            <h2 className="text-4xl font-bold mt-5">Choose Your Favorite Books</h2>
            <p  className='text-lg font-bold my-5'>We provide you various types of categories.Explore our website. And book your favorite book on a reasonable price.We provide you various types of categories.Explore our website. And book your favorite book on a reasonable price.</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {
                categoryBooks.map(book =><BookCard
                key={book._id}
                book={book}>
                </BookCard>)
            }
        </div>
        </div>
    );
};

export default CategoryBookCollection;