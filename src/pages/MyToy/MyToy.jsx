import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import MyOneToy from '../MyOneToy/MyOneToy';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyToy = () => {

   const toys = useLoaderData()

    const { user } = useContext(AuthContext);
    const [myToy, setMyToy] = useState([]);

    const url = `https://cars-toytopia-server.vercel.app/myToy?sellerEmail=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, [])

    // const handleDelete = _id => {
    //     console.log(_id);

    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {

    //             fetch(`https://cars-toytopia-server.vercel.app//toy/${_id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'Your toy has been deleted.',
    //                             'success'
    //                         )
    //                     }
    //                 })

    //         }
    //     })
    // }


    return (
        <div className="container w-10/12 mx-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cars ToyTopia/My Toys</title>
            </Helmet>


            <div>
                <div className="">
                    <h1 className="text-orange-600 text-center md:text-6xl text-3xl font-bold my-8">My Toys</h1>
                </div>
            </div>

            <div className="container md:overflow-hidden overflow-scroll mx-auto mb-32">
                <table className="min-w-full divide-y  divide-orange-600">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider">
                                photo
                            </th>
                            <th className="px-6 py-3  text-xs text-center font-bold  uppercase tracking-wider">
                                Toy Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">
                                Seller Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                                Price
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                                Sub-category
                            </th>
                            <th className="px-6 py-3  text-xs text-center font-bold  uppercase tracking-wider">
                                Available Quantity
                            </th>

                            <th className="px-6 py-3 text-center text-xs font-bold  uppercase tracking-wider">
                                Update/Delete
                            </th>
                        </tr>
                    </thead>
                    </table>
                    </div>

            {
                myToy.map((toy) => <MyOneToy
                key={toy._id}
                toy={toy}
                ></MyOneToy>)
            }

            {/* <div className="container md:overflow-hidden overflow-scroll mx-auto mb-32">
                <table className="min-w-full divide-y  divide-orange-600">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider">
                                photo
                            </th>
                            <th className="px-6 py-3  text-xs text-center font-bold  uppercase tracking-wider">
                                Toy Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">
                                Seller Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                                Price
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                                Sub-category
                            </th>
                            <th className="px-6 py-3  text-xs text-center font-bold  uppercase tracking-wider">
                                Available Quantity
                            </th>

                            <th className="px-6 py-3 text-center text-xs font-bold  uppercase tracking-wider">
                                Update/Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToy.map(toy => (
                            <tr key={toy._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <img className="h-32 w-32 rounded-full" src={toy.photo} alt={toy.name} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-center text-black">{toy.name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{toy.sellerName}</div>
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

                                <td className="py-4 whitespace-nowrap text-center">
                                    <Link to={`/${toy._id}`}>
                                    <button className=" ">
                                        <img src="https://i.ibb.co/G08dvDK/edit-button.png" alt="" />
                                    </button>
                                    </Link>
                                    <button onClick={() => handleDelete(toy._id)} className="ml-4 ">
                                        <img src="https://i.ibb.co/b1ngMDt/delete-button.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div> */}



        </div>
    );
};

export default MyToy;