import React from 'react';
import './Advertise.css'

const Advertise = () => {
    return ( 
            <div className='mt-16'>
                <h1 className="text-4xl font-bold text-center m-3">Books On Demand</h1>
                <p className='text-center font-bold text-primary my-4 mx-20'>Explore our popular and on demanded books of your favorite writer.One of the largest and most authoritative collections of online journals, books, and research resources, covering life, health, social, and physical ...</p>
                <div className="grid xs-grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <div>
                    <img style={{height:'350px',width:'350px'}} src="https://www.nicepng.com/png/full/332-3326346_book-cover-design-contests-book-cover-design.png" alt=" random imgee" className=" rounded-lg shadow-md"/>

                        <div className="relative px-2 -mt-16 w-98">
                            <div className="bg-white p-4 rounded-lg shadow-lg">
                                <div className="flex items-baseline">
                                    <span className="btn-xs btn btn-primary  uppercase font-semibold tracking-wide">
                                        New
                                    </span>
                                    <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                        James Maxwell
                                    </div>
                                </div>

                                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Enchandress</h4>

                                <div className="mt-1">
                                    $12
                                    
                                </div>
                                <div className="mt-2">
                                    <span className="text-primary text-md font-semibold">3.5/5 ratings </span>
                                    <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                                </div>
                            </div>
                        </div>
                </div>
                <div>
                    <img style={{height:'350px',width:'350px'}} src="https://dcassetcdn.com/design_img/122728/69389/69389_1773178_122728_image.jpg" alt=" random imgee" className=" rounded-lg shadow-md"/>

                        <div className="relative px-2 -mt-16 w-98 ">
                            <div className="bg-white p-4 rounded-lg shadow-lg">
                                <div className="flex items-baseline">
                                    <span className="btn-xs btn btn-primary  uppercase font-semibold tracking-wide">
                                        New
                                    </span>
                                    <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                        Eric Burnett
                                    </div>
                                </div>

                                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Our World's Story</h4>

                                <div className="mt-1">
                                    $9
                                   
                                </div>
                                <div className="mt-2">
                                    <span className="text-primary text-md font-semibold">4/5 ratings </span>
                                    <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                                </div>
                            </div>
                        </div>
                </div>
                <div>
                    <img style={{height:'350px',width:'350px'}} src="https://dcassetcdn.com/design_img/2627238/493420/493420_14508317_2627238_7a714e65_image.jpg" alt=" random imgee" className=" rounded-lg shadow-md"/>

                        <div className="relative px-2 -mt-16 w-98 ">
                            <div className="bg-white p-4 rounded-lg shadow-lg">
                                <div className="flex items-baseline">
                                    <span className="btn-xs btn btn-primary  uppercase font-semibold tracking-wide">
                                        New
                                    </span>
                                    <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                       J.K Rowling
                                    </div>
                                </div>

                                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Spinning World History</h4>

                                <div className="mt-1">
                                    $10
                                    
                                </div>
                                <div className="mt-2">
                                    <span className="text-primary text-md font-semibold">4/5 ratings </span>
                                    <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            </div>
    );
};

export default Advertise;