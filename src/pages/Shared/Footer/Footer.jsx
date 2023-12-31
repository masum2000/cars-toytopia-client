import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-16'>
            <footer className="bg-gray-900 text-gray-500">
                <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 flex flex-wrap justify-between">
                    <div className="w-full text-center md:w-1/5 mb-4 md:mb-0">
                        <img className='h-20 mx-auto' src="https://i.ibb.co/JqmZyGg/Smile-emovebg-preview.png"></img>
                        <p className='text-center text-white text-xl font-bold'>Cars ToyTopia</p>
                    </div>
                    <div className="w-full text-center md:w-1/5 mb-4 md:mb-0">
                        <h4 className="text-white text-lg font-bold mb-4">About Us</h4>
                        <p>We are passionate about bringing the joy of cars toys to enthusiasts of all ages. Our collection showcases a wide variety of meticulously crafted and highly detailed toy cars, ranging from classic models</p>
                    </div>
                    <div className="w-full text-center md:w-1/5 mb-4 md:mb-0">
                        <h4 className="text-white text-lg font-bold mb-4">Support</h4>
                        <p>Help Desk</p>
                        <p>Daily Sales</p>
                        <p>Become a Partner</p>
                        <p>Developers</p>
                    </div>
                    <div className="w-full text-center md:w-1/5 mb-4 md:mb-0">
                        <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
                        <p>West Shewrapara</p>
                        <p>Mirpur Dhaka, Bangladesh</p>
                        <p>Phone: +880-1780999575</p>
                        <p>Email: cars.toytopia@gmail.com</p>
                    </div>
                    <div className="w-full  md:w-1/5">
                        <h4 className="text-white text-center text-lg font-bold mb-4">Follow Us</h4>
                        <div className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/mizanur-rahman-masum-083179194/" className="ml-4 text-gray-500 hover:text-gray-400 transition duration-500 ease-in-out"><FaLinkedin/></a>
                            <a href="https://www.facebook.com/mizanurmasum2000" className="ml-4 text-gray-500 hover:text-gray-400 transition duration-500 ease-in-out"><FaFacebook/></a>
                            <a href="https://www.instagram.com/mizanur_._masum/" className="ml-4 text-gray-500 hover:text-gray-400 transition duration-500 ease-in-out"><FaInstagram></FaInstagram></a>
                            <a href="https://twitter.com/Mizanur24366727" className="ml-4 text-gray-500 hover:text-gray-400 transition duration-500 ease-in-out"><FaTwitter></FaTwitter></a>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 py-4">
                    <div className="container mx-auto px-4 flex justify-between">
                        <p className="text-sm text-gray-500">© 2023 Cars ToyTopia. All rights reserved.</p>
                        <p className="text-sm text-gray-500">Developed by Mizanur Rahman Masum</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;