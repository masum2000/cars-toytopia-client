import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
        {/* <ToastContainer
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
      /> */}
      <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
          <div className="container mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 rounded-3xl  shadow-2xl">
              <div className="md:w-1/2">
                  <h1 className='text-3xl mb-8 md:text-start text-center'>Welcome to <span className='text-orange-500 font-bold italic'>Cars ToyTopia</span></h1>
                  <img src="https://i.ibb.co/02cv3zG/My-password-bro.png" alt="About Us Image" className="md:w-10/12 object-cover" />
              </div>
              <div className="md:w-1/2 w-full ">
                  <div className="card flex-shrink-0 w-full">
                      <form  className="card-body">
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
                                  <button  className='px-4'>
                                      <img className='w-10' src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png" alt="" />
                                  </button>
                                  <button  className='px-4'>
                                      <img className='w-10' src="https://i.ibb.co/VxKN3Mg/github.png" alt="" />

                                  </button>
                              </div>
                      <div>
                          <p className='text-sm'>New to <span className='font-semibold text-orange-500'>Cars ToyTopi</span> ?<Link to="/signup"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Registration Here</button>
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