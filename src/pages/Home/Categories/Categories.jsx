import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [activeTab, setActiveTab] = useState("RegularCar");


    useEffect(()=>{
        fetch(`https://cars-toytopia-server.vercel.app/allCategory/${activeTab}`)
        .then(res => res.json())
        .then(result => {
            setCategories(result);
        })
    },[activeTab]);

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    }
    return (
        <div className='container mx-auto w-10/12'>
            
      <h1 className="title text-center text-orange-500 text-3xl font-bold mt-5 p-5">Categories of Toys</h1>
      <div className="tab-container text-center">
        <div className="text-center w-100 m-auto">
          <div className="  justify-content-center align-items-center">
            <div
              onClick={() => handleTabClick("RegularCar")}
              className={`tab   RegularCar ${
                activeTab == "RegularCar" ? " bg-danger " : ""
              }`}
            >
              <h2 className='font-bold border-2 border-orange-500 text-black p-1 rounded-lg bg-none hover:bg-orange-600 duration-300 hover:text-white'>Regular Car Toys</h2>
            </div>
            <div
              onClick={() => handleTabClick("PoliceCar")}
              className={`tab   PoliceCar ${
                activeTab == "PoliceCar" ? " bg-danger " : ""
              }`}
            >
             <h2 className=' font-bold border-2 border-orange-500 text-black p-1 rounded-lg bg-none hover:bg-orange-600 duration-300 hover:text-white'>Police Car Toys</h2>
            </div>
            <div
              onClick={() => handleTabClick("TruckCar")}
              className={`tab   TruckCar ${
                activeTab == "TruckCar" ? " bg-danger " : ""
              }`}
            >
              <h2 className='font-bold border-2 border-orange-500 text-black p-1 rounded-lg bg-none hover:bg-orange-600 duration-300 hover:text-white'>Truck Car Toys</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 row">
        {categories?.map((category) => (
          <Category category={category}/>
        ))}
      </div>
    </div>
    );
};

export default Categories;