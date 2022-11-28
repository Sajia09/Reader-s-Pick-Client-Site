import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AuthContext } from '../../Contexts/AuthProvider';
const BookCard = ({ book }) => {
    const {user} = useContext(AuthContext);
    const { name, picture, location, sellingPrice, originalPrice, yearsOfUse, time, seller } = book;


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const itemname = form.itemname.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const booking = {
            buyerName: username,
            email,
            itemName: itemname,
            phone,
            price
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking confirmed');  
                    form.reset(); 
                }
                else{
                    toast.error(data.message);
                }
            })


    }


    return (
        <div className="card w-70 bg-base-100 shadow-xl">
            <figure><img style={{ height: '200px' }} className='w-full' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <ul>
                    <li className='flex items-center justify-left'><BsFillArrowRightCircleFill className='mr-2' />Original Price: <span className='font-bold'> {originalPrice}$</span></li>
                    <li className='flex items-center justify-left'><BsFillArrowRightCircleFill className='mr-2' />Selling Price:<span className='font-bold'>{sellingPrice}$</span> </li>
                    <li className='flex items-center justify-left'><BsFillArrowRightCircleFill className='mr-2' />Location:<span className='font-bold'>{location}</span></li>
                    <li className='flex items-center justify-left'><BsFillArrowRightCircleFill className='mr-2' />Years Of use:<span className='font-bold'>{yearsOfUse}</span> </li>
                    <li className='flex items-center justify-left'><BsFillArrowRightCircleFill className='mr-2' />Posting Time:<span className='font-bold'>{time}</span> </li>
                    <li className='flex items-center justify-left'><BsFillArrowRightCircleFill className='mr-2' />Seller Name:<span className='font-bold'>{seller}</span> </li>
                </ul>
                {/* Modal */}
                <div>
                    <input type="checkbox" id="booking-modal" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box relative overflow-auto">
                            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <form onSubmit={handleBooking}>
                            <div class="form-control w-full ">
                                    <label class="label">
                                        <span class="label-text">Phone</span>
                                    </label>
                                    <input type="number" name='phone' placeholder="phone number" class="input input-bordered w-full" required />
                                </div>
                                <div class="form-control w-full ">
                                    <label class="label">
                                        <span class="label-text">Address</span>
                                    </label>
                                    <textarea name='address' className='textarea textarea-bordered' placeholder='Your Address'></textarea>
                                </div>
                                <div class="form-control w-full ">
                                    <label class="label">
                                        <span class="label-text">Buyer's Name</span>
                                    </label>
                                    <input name='username' type="text" placeholder="Type here" class="input input-bordered w-full " defaultValue={user?.displayName} disabled />
                                </div>
                                <div class="form-control w-full ">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="Type here" class="input input-bordered w-full" defaultValue={user?.email} disabled />
                                </div>
                                <div class="form-control w-full ">
                                    <label class="label">
                                        <span class="label-text">Item Name</span>
                                    </label>
                                    <input name='itemname' type="text" placeholder="Type here" class="input input-bordered w-full" defaultValue={name} disabled />
                                </div>
                                <div class="form-control w-full ">
                                    <label class="label">
                                        <span class="label-text">Price</span>
                                    </label>
                                    <input name='price' type="text" placeholder="Type here" class="input input-bordered w-full" defaultValue={sellingPrice} disabled />
                                </div>
                                <input type="submit" className='btn btn-primary mt-5' value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <label className="btn btn-primary"
                        htmlFor="booking-modal"
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default BookCard;