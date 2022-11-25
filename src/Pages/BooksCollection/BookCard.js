import React from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const BookCard = ({ book }) => {
    const {name,picture,location,sellingPrice,originalPrice,yearsOfUse,time,seller} = book;
    return (
        <div className="card w-70 bg-base-100 shadow-xl">
            <figure><img style={{height:'200px'}} className='w-full' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <ul>
                <li className='flex items-center justify-left'><BsFillArrowRightCircleFill  className='mr-2'/>Original Price: <span className='font-bold'> {originalPrice}$</span></li>
                <li className='flex items-center justify-left'><BsFillArrowRightCircleFill className='mr-2'/>Selling Price:<span className='font-bold'>{sellingPrice}$</span> </li>
                <li className='flex items-center justify-left'><BsFillArrowRightCircleFill className='mr-2'/>Location:<span className='font-bold'>{location}</span></li>
                <li className='flex items-center justify-left'><BsFillArrowRightCircleFill className='mr-2'/>Years Of use:<span className='font-bold'>{yearsOfUse}</span> </li>
                <li className='flex items-center justify-left'><BsFillArrowRightCircleFill className='mr-2'/>Posting Time:<span className='font-bold'>{time}</span> </li>
                <li className='flex items-center justify-left'><BsFillArrowRightCircleFill className='mr-2'/>Seller Name:<span className='font-bold'>{seller}</span> </li>
                </ul>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;