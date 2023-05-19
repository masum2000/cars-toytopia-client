
import { key } from 'localforage';
import { Helmet } from 'react-helmet';
import { FaUserCircle } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const AllToy = () => {

    const toys = useLoaderData();

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cars ToyTopia/All Toys</title>
            </Helmet>
            <div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                {
                    toys.map(toy =>
                        
                        <div>
                            <div className="card w-96 shadow-xl h-">
                                <figure className=" bg-[#F7B801] h-72">
                                    <img src={toy.photo} alt="Shoes" className="rounded-xl w-32" />
                                </figure>
                                <div className="p-6">
                                    <div className='flex justify-between'>
                                    <h2 className=" text-xl lowercase custom-font">{toy.name}</h2>
                                    <p className='flex '><FaUserCircle className='text-[#283149] mr-1' /><span className='text-xs'>{toy.sellerName}</span></p>
                                    </div>
                                    <p>{toy.subCategory}</p>
                                    <div className='flex justify-between'>
                                    <p className='text-md'><span className='font-semibold'>Price:</span> ${toy.price}</p>
                                    <p className='text-md'><span className='font-semibold'>Quantity</span>: {toy.quantity}</p>

                                        
                                    </div>
                                    <div className="flex justify-end  py-3">
                                        <button className="custom-button2">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )


                }
            </div>
            </div>


            
        </div>
    );
};

export default AllToy;