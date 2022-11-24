import React from 'react';
import bg1 from '../../../images/bg1.jpg'
const Banner = () => {
    return (
        <div className="hero  lg:min-h-screen" style={{ backgroundImage: `url(${bg1})` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center  text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Welcome To Reader's Pick Official</h1>
                    <p className="mb-5 text-sceondary font-bold">We provide you the best on lowest possible price.So Treasure your habit of reading books.Explore our website to learn more.</p>
                    <button className="btn btn-primary">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;

// style={{ backgroundImage:`url(${bg1})`