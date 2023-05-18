import React from 'react';

const Gallery = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2  w-10/12  gap-10 py-16 container mx-auto items-center">
                <div className="grid grid-cols-3  gap-4 ">
                    <img src="https://i.ibb.co/tzgVVG6/10004.jpg" alt="placeholder" className="w-full h-full object-cover rounded-lg" />
                    <img src="https://i.ibb.co/sF3fDBy/10008.jpg" alt="placeholder" className="w-full h-full object-cover rounded-lg" />
                    <img src="https://i.ibb.co/LSBbd7d/10012.jpg" alt="placeholder" className="w-full h-full object-cover rounded-lg" />
                    <img src="https://i.ibb.co/QJGJsDj/10005.jpg" alt="placeholder" className="w-full h-full object-cover rounded-lg" />
                    <img src="https://i.ibb.co/W3GRXFb/10001.jpg" alt="placeholder" className="w-full h-full object-cover rounded-lg" />
                    <img src="https://i.ibb.co/Dz0vtS1/10010.jpg" alt="placeholder" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className='text-center space-y-4'>
                    <h2 className="text-orange-600  text-2xl md:text-6xl  mb-8">Gallery</h2>
                        <div>
                            <h2 className='text-xl md:text-4xl mb-6'>Our All Latest  Toys Are Here!</h2>
                        </div>
                        <button className="border-2  border-orange-600 text-black p-2 rounded-lg bg-none font-bold   hover:bg-orange-600 duration-300 hover:text-white ">Show All</button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;