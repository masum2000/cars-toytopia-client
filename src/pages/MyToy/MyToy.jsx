import React from 'react';
import { Helmet } from 'react-helmet';

const MyToy = () => {
    return (
        <div>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Cars ToyTopia/My Toys</title>
            </Helmet>
          

            <h2>This is my toy page</h2>
        </div>
    );
};

export default MyToy;