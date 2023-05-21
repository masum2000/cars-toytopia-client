import React from 'react';

const Category = ({category}) => {
    const { _id, name,  price, quantity, description, rating, photo, sellerName, subCategory } = category || {};
    return (
        <div className='shadow-xl p-4'>
                <figure className='flex justify-center w-full h-48 bg-orange-100 '>
                    <img className='h-52 hover:h-56 duration-300' src={photo} alt="" />
                </figure>
                <div>
                    <div className='card-body'>
                        <h1 className='custom-font text-xl'>{name}</h1>
                        <div className='flex justify-between'>
                            <h1>Price: ${price}</h1>
                            <h1>Ratings: {rating}</h1>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button  className='custom-button2'>
                            Details
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default Category;