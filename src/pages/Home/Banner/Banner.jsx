import Marquee from "react-fast-marquee";
import { FaArrowLeft, FaArrowRight, FaBeer } from "react-icons/fa";

const Banner = () => {
    return (
        // <div className=''>
        //     <div className="hero  md:h-screen " style={{ backgroundImage: `url("https://i.ibb.co/5v8CTGs/banner4.jpg")`, backgroundSize: "cover",backgroundPosition: "top center"}}>
        //         <div className="hero-overlay"></div>
        //         <div className="hero-content text-center text-neutral-content">
        //             <div>
        //                 <div className='mx-auto'>
        //                         <h1 className="mb-10 md:text-5xl lg:text-6xl text-3xl font-bold  ">Welcome to <span className='text-orange-600'>Cars ToyTopia</span></h1>
        //                         <Marquee>
        //                         <h1 className="mb-10 md:text-2xl lg:text-3xl text-2xl   ">Rev up your imagination with our captivating collection of Cars ToyTopia: Unleash the Joy of Playtime.....!</h1>
        //                         </Marquee>

        // 
        //                 </div>
        //                 <div className=' md:w-4/6 mx-auto'>
        //                     <p className="mb-10">We provide the best culinary services in Bangladesh. Our world-class chefs use only the freshest ingredients to create delicious and healthy meals that cater to all tastes and preferences.</p>
        //                 </div>
        //                 <button className="border-2 border-orange-600 text-white p-3 rounded-lg bg-none font-bold   hover:bg-orange-600 duration-300 ">More Details</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="carousel w-full  ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/MSQw6Dc/banner-1-1.jpg" className="w-full " />
                <div className="  absolute h-full flex items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white md:space-y-12 md:pl-24 w-10/12 pl-2'>
                        <h2 className='  text-xl md:text-6xl font-bold mb-4'>Welcome to <span className='text-orange-600'>Cars ToyTopia</span> </h2>
                        <Marquee>
                        <p className="text-sm mb-4 md:text-2xl">Rev up your imagination with our captivating collection of Cars ToyTopia: Unleash the Joy of Playtime.....!</p>
                        </Marquee>
                        <div>
                            <button className="  bg-orange-600 hover:bg-white hover:text-black font-bold px-2 py-1 rounded-md  ">All Toys</button>
                            <button className=" border hover:bg-orange-600  px-2 py-1 rounded-md font-bold ml-3 md:ml-6 ">More Details</button>
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-end transform pr-2 -translate-y-1/2 left-5 right-0 bottom-0'>
                    <a href="#slide3" className="text-white  ml-3 p-2 bg-orange-600 rounded mr-5"><FaArrowLeft /></a>
                    <a href="#slide2" className="text-white p-2 bg-orange-600 rounded"><FaArrowRight /></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/nk9jQcq/banner4-1.jpg" className="w-full " />
                <div className="  absolute h-full flex items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white md:space-y-12 md:pl-24 w-10/12 pl-2'>
                        <h2 className='  text-xl md:text-6xl font-bold mb-4'>Welcome to <span className='text-orange-600'>Cars ToyTopia</span> </h2>
                        <Marquee>
                        <p className="text-sm mb-4 md:text-2xl">Rev up your imagination with our captivating collection of Cars ToyTopia: Unleash the Joy of Playtime.....!</p>
                        </Marquee>
                        <div>
                            <button className="  bg-orange-600 hover:bg-white hover:text-black font-bold px-2 py-1 rounded-md  ">All Toys</button>
                            <button className=" border hover:bg-orange-600  px-2 py-1 rounded-md font-bold ml-3  md:ml-6 ">More Details</button>
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-end transform pr-2 -translate-y-1/2 left-5 right-0 bottom-0'>
                    <a href="#slide1" className="text-white p-2 bg-orange-600 rounded mr-5"><FaArrowLeft /></a>
                    <a href="#slide3" className="text-white p-2 bg-orange-600 rounded"><FaArrowRight /></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/x7JGGBk/banner4-2.jpg" className="w-full " />
                <div className="  absolute h-full flex items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white md:space-y-12 md:pl-24 w-10/12 pl-2'>
                        <h2 className='  text-xl md:text-6xl font-bold mb-4'>Welcome to <span className='text-orange-600'>Cars ToyTopia</span> </h2>
                        <Marquee>
                        <p className="text-sm mb-4 md:text-2xl">Rev up your imagination with our captivating collection of Cars ToyTopia: Unleash the Joy of Playtime.....!</p>
                        </Marquee>
                        <div>
                            <button className="  bg-orange-600 hover:bg-white hover:text-black font-bold px-2 py-1 rounded-md  ">All Toys</button>
                            <button className=" border hover:bg-orange-600  px-2 py-1 rounded-md font-bold ml-3 md:ml-6 ">More Details</button>
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-end transform pr-2 -translate-y-1/2 left-5 right-0 bottom-0'>
                    <a href="#slide2" className="text-white p-2 bg-orange-600 rounded mr-5"><FaArrowLeft /></a>
                    <a href="#slide1" className="text-white p-2 bg-orange-600 rounded"><FaArrowRight /></a>
                </div>
            </div>
            {/* <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/MSQw6Dc/banner-1-1.jpg" className="w-full " />
                <div className="rounded-lg absolute h-full flex items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className=' text-6xl font-bold'>Affordable Price For Car Servicing </h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn  btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/nk9jQcq/banner4-1.jpg" className="w-full " />
                <div className=" absolute h-full flex items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className=' text-6xl font-bold'>Affordable Price For Car Servicing </h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn  btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>

            </div> */}
            {/* <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-lg" />
                <div className="rounded-lg absolute h-full flex items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className=' text-6xl font-bold'>Affordable Price For Car Servicing </h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn  btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>

            </div> */}
        </div>
    );
};

export default Banner;