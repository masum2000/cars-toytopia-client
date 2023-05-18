import React from 'react';

const Gallery = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2  w-10/12  gap-10 py-16 container mx-auto items-center">
                <div className="grid grid-cols-3  gap-4  ">
                    <div className='bg-orange-100 rounded-lg hover:bg-gray-500 hover:scale-105 transition-transform'>
                        <img src="https://i.ibb.co/F61Zsvj/10005-removebg-preview.png" alt="placeholder" className="w-full h-full object-cover rounded-lg cursor-pointer" />
                    </div>
                    <div className='bg-orange-100 rounded-lg hover:bg-gray-500 hover:scale-105 transition-transform'>
                        <img src="https://i.ibb.co/2SkMj89/10008-removebg-preview.png" alt="placeholder" className="w-full h-full object-cover rounded-lg cursor-pointer" />
                    </div>
                    <div className='bg-orange-100 rounded-lg hover:bg-gray-500 hover:scale-105 transition-transform'>
                        <img src="https://i.ibb.co/XZYG5f7/10012-removebg-preview.png" alt="placeholder" className="w-full h-full object-cover rounded-lg cursor-pointer" />
                    </div>
                    <div className='bg-orange-100 rounded-lg hover:bg-gray-500 hover:scale-105 transition-transform'>
                        <img src="https://i.ibb.co/923bZND/10010-removebg-preview.png" alt="placeholder" className="w-full h-full object-cover rounded-lg cursor-pointer" />
                    </div>
                    <div className='bg-orange-100 rounded-lg hover:bg-gray-500 hover:scale-105 transition-transform'>
                        <img src="https://i.ibb.co/jHm3BrV/10001-removebg-preview-1.png" alt="placeholder" className="w-full h-full object-cover rounded-lg cursor-pointer" />
                    </div>
                    <div className='bg-orange-100 rounded-lg hover:bg-gray-500 hover:scale-105 transition-transform'>
                        <img src="https://i.ibb.co/ggG0YZv/10004-removebg-preview.png" alt="placeholder" className="w-full h-full object-cover rounded-lg cursor-pointer" />
                    </div>

                </div>
                <div className='text-center space-y-4'>
                    <h2 className="text-orange-600  text-3xl font-bold md:text-6xl  mb-8">Gallery</h2>
                    <div>
                        <h2 className='text-xl md:text-4xl mb-6'>Our All Latest  Toys Are Here!</h2>
                    </div>
                    <button className="border-2  border-orange-600 text-black p-1 rounded-lg bg-none font-bold   hover:bg-orange-600 duration-300 hover:text-white ">Show All</button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;