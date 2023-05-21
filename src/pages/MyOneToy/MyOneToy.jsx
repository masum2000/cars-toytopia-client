import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyOneToy = ({toy}) => {

    const { _id, name,  price, quantity, description, rating, photo, sellerName, subCategory } = toy;


    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
             console.log('clicked confirm button');
               fetch(`https://cars-toytopia-server.vercel.app/dSingleToy/${_id}`,{
                method: 'POST',
               })
               .then(res => res.json())
               .then(data =>{
                   console.log(data);
                   if(data.deletedCount > 0){
                       Swal.fire({
                           title: 'Success!',
                           text: 'Toy Deleted Successfully.',
                           icon: 'success',
                           confirmButtonText: 'Ok'
                         })
                   }
               })

            }
        })
    }



    return (
        <div>

            <div className="container md:overflow-hidden overflow-scroll mx-auto mb-32">
                <table className="min-w-full divide-y  divide-orange-600">
                    
                    <tbody>
                        
                            <tr key={_id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <img className="h-32 w-32 rounded-full" src={photo} alt='' />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-center text-black">{name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{sellerName}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-orange-500">{price}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-orange-500">{subCategory}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-center text-orange-500">{quantity}</div>
                                </td>

                                <td className="py-4 whitespace-nowrap text-center">
                                    <Link to={`/singleToy/${_id}`}>
                                    <button className=" ">
                                        <img src="https://i.ibb.co/G08dvDK/edit-button.png" alt="" />
                                    </button>
                                    </Link>
                                    <button onClick={()=> handleDelete(_id)}  className="ml-4 ">
                                        <img src="https://i.ibb.co/b1ngMDt/delete-button.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                        
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default MyOneToy;