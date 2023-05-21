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
            
      <h1 className="title text-center text-orange-500 text-3xl font-bold mt-5 p-5">Available Job's</h1>
      <div className="tab-container text-center">
        <div className="text-center w-100 m-auto">
          <div className="  justify-content-center align-items-center">
            <div
              onClick={() => handleTabClick("RegularCar")}
              className={`tab   RegularCar ${
                activeTab == "RegularCar" ? " bg-danger " : ""
              }`}
            >
              Regular Car
            </div>
            <div
              onClick={() => handleTabClick("PoliceCar")}
              className={`tab   PoliceCar ${
                activeTab == "PoliceCar" ? " bg-danger " : ""
              }`}
            >
              Police Car
            </div>
            <div
              onClick={() => handleTabClick("TruckCar")}
              className={`tab   TruckCar ${
                activeTab == "TruckCar" ? " bg-danger " : ""
              }`}
            >
             Truck Car
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