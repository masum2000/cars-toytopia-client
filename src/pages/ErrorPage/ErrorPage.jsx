import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='flex flex-col items-center justify-center h-screen p-16 bg-white text-gray-900'>
            <img className='md:w-2/6' src='https://i.ibb.co/R0ypWm8/5156002-2696450.jpg' />
            <Link
                to='/'
                className="border-2 border-orange-600 text-black mt-6 p-3 rounded-lg bg-none font-bold hover:text-white  hover:bg-orange-600 duration-300 "
            >
                Back to Home
            </Link>
        </section>
    );
};

export default ErrorPage;