import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';
import BookCard from './BookCard';

const BooksCollection = () => {
    const url = 'http://localhost:5000/allbooks';
    const {data: allBooks=[],isLoading} = useQuery({
        queryKey:['allbooks'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-4xl font-bold mt-5">Choose Your Favorite Books</h2>
            <p  className='text-lg font-bold my-5'>We provide you various types of categories.Explore our website. And book your favorite book on a reasonable price.We provide you various types of categories.Explore our website. And book your favorite book on a reasonable price.</p>
            <div className='grid gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            allBooks.map(book=><BookCard
            key={book._id}
            book={book}
            ></BookCard>)
          }
        </div>
        </div>
    );
};

export default BooksCollection;