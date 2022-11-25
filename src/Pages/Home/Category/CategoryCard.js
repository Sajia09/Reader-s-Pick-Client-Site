import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { name, about } = category;
    return (
        <div className="card w-96 bg-primary text-white">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{about}</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${name}`} className="btn btn-neutral text-primary">Explore</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;