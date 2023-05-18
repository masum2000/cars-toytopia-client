import React from 'react';

const About = () => {
    return (
        <div>
            <div className="container w-10/12 mx-auto py-8">
                <div className="grid grid-cols-1   md:grid-cols-2 gap-8 items-center ">
                    <div className='text-center'>
                        <h2 className="text-orange-600 md:text-6xl text-3xl font-bold mb-4">About Us</h2>
                        <p className="text-lg mb-4">
                        "Welcome to our Cars ToyTopia website! We are passionate about bringing the joy of cars toys to enthusiasts of all ages. Our collection showcases a wide variety of meticulously crafted and highly detailed toy cars, ranging from classic models to modern marvels. With our dedication to quality and authenticity, we strive to provide an immersive experience that captures the excitement and fascination of the automotive world. Explore our About Us section to learn more about our mission, team, and the inspiration behind our love for cars toys."
                        </p>
                        <button className="border-2 border-orange-600 text-black p-1 rounded-lg bg-none font-bold   hover:bg-orange-600 duration-300 hover:text-white ">More Details</button>
                    </div>
                    <div className='bg-orange-100 rounded-lg'>
                        <img src="https://i.ibb.co/WvYqR7S/banner1-removebg-preview.png" alt="About Us" className="w-full " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;