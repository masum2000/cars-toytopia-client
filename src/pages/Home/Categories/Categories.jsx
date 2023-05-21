import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [activeTab, setActiveTab] = useState("Regular Car");


    useEffect(()=>{
        fetch(`http://localhost:5000/allCategory/${activeTab}`)
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
            <h2>Category page</h2>
      <h1 className="title text-center mt-5 p-5">Available Job's</h1>
      <div className="tab-container text-center">
        <div className="text-center w-100 m-auto">
          <div className="  justify-content-center align-items-center">
            <div
              onClick={() => handleTabClick("Regular Car")}
              className={`tab   Regular Car ${
                activeTab == "Regular Car" ? " bg-danger " : ""
              }`}
            >
              Regular Car
            </div>
            <div
              onClick={() => handleTabClick("Police Car")}
              className={`tab   Police Car ${
                activeTab == "Police Car" ? " bg-danger " : ""
              }`}
            >
              Police Car
            </div>
            <div
              onClick={() => handleTabClick("Truck Car")}
              className={`tab   Truck Car ${
                activeTab == "Truck Car" ? " bg-danger " : ""
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