import React, { useState } from 'react';

const Category = ({ category }) => {
  const { _id, name, price, quantity, description, rating, photo, sellerName, subCategory } = category || {};

  const [selectedToy, setSelectedToy] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setSelectedToy(category);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='shadow-xl p-4'>
      <figure className='flex justify-center w-full h-48 bg-orange-100'>
        <img className='h-52 hover:h-56 duration-300' src={photo} alt='' />
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
          <button className='custom-button2' onClick={openModal}>
            Details
          </button>
        </div>
      </div>

      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedToy.name}</h2>
            <p>Price: ${selectedToy.price}</p>
            <p>Description: {selectedToy.description}</p>
            {/* Render other category details here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
