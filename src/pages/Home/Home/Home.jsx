import Banner from '../Banner/Banner';
import Gallery from '../../Gallery/Gallery';
import About from '../About/About';
import TopBrand from '../TopBrand/TopBrand';
import { Helmet } from 'react-helmet';

const Home = () => {
    
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cars ToyTopia/Home</title>
            </Helmet>
           <Banner></Banner>
           <About></About>
           <Gallery></Gallery>
           <TopBrand></TopBrand>
        </div>
    );
};

export default Home;