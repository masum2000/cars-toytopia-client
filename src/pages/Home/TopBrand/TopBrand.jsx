import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const TopBrand = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      },[])
    return (
        <div className='w-10/12 container mx-auto' data-aos="fade-right">
            <h2 className='text-3xl md:text-6xl font-bold text-orange-600 text-center'>Shop Our Top Car Brands Toy</h2>
            <div className='grid md:grid-cols-4 grid-cols-2 space-y-5 mt-6'>
                <div className='col-span-1 flex items-center justify-center'>
                    <img src="https://i.ibb.co/WDTXrSQ/10008.jpg" alt="placeholder" className=" object-cover rounded-lg cursor-pointer" />
                </div>
                <div className='col-span-1 flex items-center justify-center'>
                    <img src="https://i.ibb.co/3YD7WGx/10007.jpg" alt="placeholder" className="  object-cover rounded-lg cursor-pointer" />
                </div>
                <div className='col-span-1 flex items-center justify-center'>
                    <img src="https://i.ibb.co/F4Mgv0y/10006.jpg" alt="placeholder" className="   object-cover rounded-lg cursor-pointer" />
                </div>
                <div className='col-span-1 flex items-center justify-center'>
                    <img src="https://i.ibb.co/vQfL75X/10005.jpg" alt="placeholder" className="  object-cover rounded-lg cursor-pointer" />
                </div>
                <div className='col-span-1 flex items-center justify-center'>
                    <img src="https://i.ibb.co/wScXp7p/10003.jpg" alt="placeholder" className="  object-cover rounded-lg cursor-pointer" />
                </div>
                <div className='col-span-1 flex items-center justify-center'>
                    <img src="https://i.ibb.co/tDNC7bd/10004.jpg" alt="placeholder" className="  object-cover rounded-lg cursor-pointer" />
                </div>
                <div className='col-span-1 flex items-center justify-center'>
                    <img src="https://i.ibb.co/pr2334F/10001.jpg" alt="placeholder" className="  object-cover rounded-lg cursor-pointer" />
                </div>
                <div className='col-span-1 flex items-center justify-center'>
                    <img src="https://i.ibb.co/mtVN9fd/10002.jpg" alt="placeholder" className="  object-cover rounded-lg cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default TopBrand;