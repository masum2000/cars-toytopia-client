import  { useState, useEffect } from 'react';

const AllToy = () => {
    
    const [toys, setToys] = useState([]);
    const [displayedToys, setDisplayedToys] = useState([]);
    const [search, setSearch] = useState('');
    const [showAll, setShowAll] = useState(false);
    

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('http://localhost:5000/toy');
          const data = await response.json();
          setToys(data);
          setDisplayedToys(data.slice(0,20));
           
        };
        fetchData();
      }, []);

      useEffect(() => {
        filterToys();
      }, [search]);

      
      const filterToys = () => {
        const filtered = toys.filter(toy =>
          toy.name.toLowerCase().includes(search.toLowerCase())
        );
        setDisplayedToys(filtered.slice(0, 20));
        setShowAll(false);
      };


      const handleSeeMore = () => {
        setDisplayedToys(toys);
        setShowAll(true);
      };

      const handleSearch = e => {
        setSearch(e.target.value);
      };

   

    return (
        <div>
            {/* <Navbar /> */}
            <div className="container w-10/12 mx-auto">
                <div className="">
                    <h1 className="text-orange-600 text-center md:text-6xl text-3xl font-bold my-8">All Toys</h1>
                </div>
            </div>
            <div className="flex items-center justify-center mb-10">
                <input
                    type="text"
                    placeholder="Search toys by name"
                    value={search}
                    onChange={handleSearch}
                    className="px-4 py-2 border border-orange-500 rounded-md focus:outline-none border-2 focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                />
                {/* <button  type="submit"  onClick={filterToys} className="px-4 py-2 border border-orange-500 text-black  rounded-md bg-none ring-1   hover:bg-orange-600 duration-300 hover:text-white">
                    Search
                </button> */}
            </div>
            <div className="container mx-auto mb-32">
                <table className="min-w-full divide-y divide-orange-600">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider">
                                photo
                            </th>
                            <th className="px-6 py-3 text-left text-xs text-center font-bold  uppercase tracking-wider">
                                Toy Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                                Price
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                                Sub-category
                            </th>
                            <th className="px-6 py-3 text-left text-xs text-center font-bold  uppercase tracking-wider">
                                Available Quantity
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">
                                Seller Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {displayedToys.map(toy => (
                            <tr key={toy._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                 <img className="h-32 w-32 rounded-full" src={toy.photo} alt={toy.name}/>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-center text-black">{toy.name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-orange-500">${toy.price}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-orange-500">{toy.subCategory}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-center text-orange-500">{toy.quantity}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{toy.sellerName}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        className="border-2 border-orange-500 text-black p-1 rounded-lg bg-none   hover:bg-orange-600 duration-300 hover:text-white"
                                        
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

                {!showAll && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleSeeMore}
              className="px-4 py-2 border border-orange-500 rounded-md bg-none border-2 hover:bg-orange-600 duration-300 hover:text-white"
            >
              See More
            </button>
          </div>
        )}

            

            </div>
           
        </div>

    );
};

export default AllToy;