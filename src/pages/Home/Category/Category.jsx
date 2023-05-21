import React, { useState } from 'react';
import Modal from 'react-modal';


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
            <h1>
              <span className='font-bold'>Price:</span> ${price}
            </h1>
            <h1>
              <span className='font-bold'>Price:</span> ${price}
            </h1>
            <h1>
              <span className='font-bold'>Ratings:</span> {rating}
            </h1>
          </div>
        </div>
        <div className='flex justify-center'>
        <button
          className="border-2 border-orange-500 text-black p-1 rounded-lg bg-none hover:bg-orange-600 duration-300 hover:text-white"
          onClick={openModal}
        >
          View Details
        </button>
        </div>
      </div>

      
      <div className=''>
      <Modal 
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Toy Details"
        className=''
      >
        <div className=''>
          <h2 className='text-xl font-bold text-orange-600'>{selectedToy && selectedToy.name}</h2>
          {selectedToy && (
            <>
                <img className='' src={selectedToy.photo}></img>
                <p className="mb-2"><span className='font-bold'>Description:</span> {selectedToy.description}</p>
                <p className="mb-2"><span className='font-bold'>Seller Name:</span> {selectedToy.sellerName}</p>
                <p className="mb-2"><span className='font-bold'>Quantity:</span> {selectedToy.quantity}</p>
                <p className="mb-2"><span className='font-bold'>Price:</span> ${selectedToy.price}</p>
                <p className="mb-2"><span className='font-bold'>Rating:</span> {selectedToy.rating}</p>
            </>
          )}
          <button onClick={closeModal} className="px-4 py-2 border border-orange-500 rounded-md bg-none hover:bg-orange-600 duration-300 hover:text-white">Close</button>
        </div>
      </Modal>
      </div>
      
    </div>
  );
};

export default Category;
