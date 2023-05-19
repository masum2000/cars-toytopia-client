import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth'
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const auth = getAuth(app)
const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    const handleSignUp = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const photo = event.target.photo.value;
        console.log(name, email, password, photo);


        if (!email || !password) {
            toast.error('Please enter both email and password');
            return;
        }
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long');
            return;
        }
 
        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            Swal.fire({
                title: 'Registration Successful!',
                text: 'Welcome to Cars ToyTopia',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
            navigate(from, { replace: true })
            console.log(loggedUser);
            event.target.reset();
                
                updateUserData(result.user, name, photo);

                signOut(auth)
                .then(() => {
                    console.log('User signed out');
                })
                .catch(error => {
                    console.error('Error signing out user:', error);
                });

        })
        .catch(error =>{ 
            console.log(error);
            toast.error('Registration Failed');

        });
    };

        const updateUserData = (user, name, photo) => {
            updateProfile(user, {
                displayName: name, photoURL: photo
            })
                .then(() => {
                })
                .catch(error => {
                    console.error(error);
                    toast.error('Registration failed');
                });
        }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cars ToyTopia/SignUp</title>
            </Helmet>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
            <div className="container mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 rounded-3xl  shadow-2xl">
                <div className="md:w-1/2 w-full  ">
                    <div className="card flex-shrink-0 w-full">
                        <form  onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">photo Url</span>
                                </label>
                                <input type="url" name='photo' placeholder="Your Photo" className="input input-bordered"  />
                            </div>
                            <div className="mt-6 form-control">
                                 <button className="border border-orange-500 hover:bg-orange-500 px-10 hover:text-white text-orange-500 font-bold text-lg py-2 rounded-lg shadow duration-300">Register</button>
                            </div>
                            <div className='text-center  mt-6'>
                              
                        <div>
                            <p className='text-sm'>Have an Account ?<Link to="/login"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Login Here</button>
                            </Link></p>
                        </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="md:w-1/2 ">
                    <h1 className='text-3xl mb-8 md:text-start text-center'>Welcome to <span className='text-orange-500 font-bold italic'>Cars ToyTopia</span></h1>
                    <img src="https://i.ibb.co/j8gSHcV/Forms-amico.png" alt="About Us Image" className="md:w-10/12 object-cover" />
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;