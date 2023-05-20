import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
    const toy = useLoaderData()
    const { _id, name,price,quantity, description,rating,photo,sellerName,sellerEmail,subCategory,subCategoryId, } = toy;

    
    const handleUpdateToy = event => {
        event.preventDefault(); 
 
        const form = event.target;
 
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const subCategoryId = form.subCategoryId.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const updatedToy = {name, sellerName, sellerEmail,subCategory, subCategoryId, quantity,price, photo, rating, description}
        console.log(updatedToy);
 
     //    send data to the server 
     fetch(`http://localhost:5000/toy/${_id}`, {
         method: 'PUT',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify(updatedToy)
     })
     .then(res => res.json())
     .then(data =>{
         console.log(data);
         if(data.insertedId){
             Swal.fire({
                 title: 'Success!',
                 text: 'Toy Updated Successfully.',
                 icon: 'success',
                 confirmButtonText: 'Ok'
               })
         }
     })
     }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CarsToyTopia/UpdateToy</title>
            </Helmet>


            <div className=" md:p-24 p-10">
            <h2 className="md:text-5xl text-3xl text-orange-600  text-center font-bold mb-6">Update: {name}</h2>
            <form onClick={handleUpdateToy}>
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" value={name} placeholder="Toy Name" className="input input-bordered w-full bg-gray-100" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="sellerName" value={sellerName} placeholder="Seller Name" className="input input-bordered w-full bg-gray-100" />
                        </label>
                    </div>
                </div>
                
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="sellerEmail" value={sellerEmail} placeholder="Seller Email" className="input input-bordered w-full bg-gray-100" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Sub-Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subCategory" value={subCategory} placeholder="Sub-Category" className="input input-bordered w-full bg-gray-100" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full bg-gray-100" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Sub-Category ID</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subCategoryId" value={subCategoryId}  placeholder="Sub-Category ID" className="input input-bordered bg-gray-100 w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full bg-gray-100" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" value={photo} placeholder="Photo URL" className="input input-bordered w-full bg-gray-100" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" value={rating} placeholder="Rating" className="input input-bordered w-full bg-gray-100" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Detail Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description} placeholder="Detail Description" className="input input-bordered w-full bg-gray-100" />
                        </label>
                    </div>
                </div>
                
                <input type="submit" value="Update" className=" btn-block border-2  border-orange-600 text-black p-1 rounded-lg bg-none font-bold py-2  hover:bg-orange-600 duration-300 hover:text-white" />
               
            </form>
        </div>
        </div>
    );
};

export default UpdateToy;