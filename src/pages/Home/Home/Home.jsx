import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../../Gallery/Gallery';
import About from '../About/About';
import TopBrand from '../TopBrand/TopBrand';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Gallery></Gallery>
           <TopBrand></TopBrand>
        </div>
    );
};

export default Home;