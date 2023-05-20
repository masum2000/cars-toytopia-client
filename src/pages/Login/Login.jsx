import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import {  GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const Login = () => {

 
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from.pathname || '/';
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    

    const [user, setUser] = useState(null);

    const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
            
                setUser(loggedUser);
                Swal.fire({
                    title: 'Logged in Successful!',
                    text: 'Welcome to Cars ToyTopia',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                
                form.reset();
                navigate(from, {replace: true })
            })
            .catch(error => {
                console.log(error);
                alert(error.message);
            });
    };


    const handleGoogleSignIn = (event) => {
        event.preventDefault();
    
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser)
                navigate(from, {replace: true })
                // alert('User logged successfully')
                Swal.fire({
                    title: 'Logged in Successful!',
                    text: 'Welcome to Cars ToyTopia',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }


    


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cars ToyTopia/Login</title>
            </Helmet> 
            
      <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
          <div className="container mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 rounded-3xl  shadow-2xl">
              <div className="md:w-1/2">
                  <h1 className='text-3xl mb-8 md:text-start text-center'>Welcome to <span className='text-orange-500 font-bold italic'>Cars ToyTopia</span></h1>
                  <img src="https://i.ibb.co/02cv3zG/My-password-bro.png" alt="About Us Image" className="md:w-10/12 object-cover" />
              </div>
              <div className="md:w-1/2 w-full ">
                  <div className="card flex-shrink-0 w-full">
                      <form onSubmit={handleLogin}  className="card-body">
                          <div className="form-control ">
                              <label className="label">
                                  <span className="label-text text-lg">Email</span>
                              </label>
                              <div className='indicator w-full flex-col'>
                              <span className="indicator-item badge bg-orange-500 border-none">Required</span>
                              <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                              </div>
                          </div>
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text text-lg">Password</span>
                              </label>
                              <div className='indicator w-full flex-col'>
                               <span className="indicator-item badge bg-orange-500 border-none">Required</span>
                              <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                              </div>
                              
                              <label className="label">
                                  <a href="#" className="label-text-alt text-lg link link-hover">Forgot password?</a>
                              </label>
                          </div>
                          <div className="mt-6 form-control">
                              <button className="border border-orange-500 hover:bg-orange-500 px-10 hover:text-white text-orange-500 font-bold text-lg py-2 rounded-lg shadow duration-300">Login</button>
                          </div>
                          <div className='text-center  mt-6'>
                              <p className='text-lg  divider '>Or Connect With</p>
                              <div className='my-4'>
                                  <button onClick={handleGoogleSignIn}  className='px-4'>
                                      <img className='w-10' src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png" alt="" />
                                  </button>
                              </div>
                      <div>
                          <p className='text-sm'>New to <span className='font-semibold text-orange-500'>Cars ToyTopia</span> ?<Link to="/signup"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Registration Here</button>
                          </Link></p>
                      </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
};

export default Login;