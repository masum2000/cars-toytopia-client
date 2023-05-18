import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        // <div>
        //     {/* navbar  */}
        //     <div className="bg-orange-600 ">
        //         <div className="navbar w-10/12 mx-auto">
        //             <div className="navbar-start">
        //                 <div className="dropdown">
        //                     <label
        //                         tabIndex={0}
        //                         className="lg:hidden text-white p-12"
        //                     >
        //                         <svg
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             className="h-7 w-7"
        //                             fill="none"
        //                             viewBox="0 0 24 24"
        //                             stroke="currentColor"
        //                         >
        //                             <path
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M4 6h16M4 12h8m-8 6h16"
        //                             />
        //                         </svg>
        //                     </label>
        //                     <ul
        //                         tabIndex={0}
        //                         className="menu menu-compact dropdown-content mt-3 shadow bg-orange-600 rounded w-40"
        //                     >
        //                         <li>
        //                             <NavLink
        //                                 exactto="/" className="normal-case text-xl text-white" activeClassName="active">
        //                                 Home
        //                             </NavLink>
        //                         </li>
        //                         <li>
        //                             <NavLink
        //                                 to="/blog"
        //                                 className="normal-case text-xl text-white"
        //                                 activeClassName="active"
        //                             >
        //                                 Blog
        //                             </NavLink>
        //                         </li>
        //                         <li>
        //                             <NavLink
        //                                 to="/login"
        //                                 className="normal-case text-xl text-white"
        //                                 activeClassName="active"
        //                             >
        //                                 Login
        //                             </NavLink>
        //                         </li>
        //                     </ul>
        //                 </div>
        //                 <Link className="md:w-3/12 w-8/12" to="https://delizioso-resturent.web.app/"><img className='h-12' src="https://i.ibb.co/HYyvRpC/Smile-emovebg-preview.png" /></Link>
        //                 <h2 className='text-white md:text-3xl font-bold '>Cars ToyTopia</h2>
        //             </div>
        //             <div className="navbar-center hidden lg:flex">
        //                 <ul className="menu menu-horizontal px-1">
        //                     <>
        //                         <NavLink
        //                             exact
        //                             to="/"
        //                             className="normal-case text-xl  px-6 py-1 text-white"
        //                             activeClassName="active"
        //                         >
        //                             Home
        //                         </NavLink>
        //                     </>
        //                     <>
        //                         <NavLink
        //                             exact
        //                             to="/"
        //                             className="normal-case text-xl  px-6 py-1 text-white"
        //                             activeClassName="active"
        //                         >
        //                             All Toys
        //                         </NavLink>
        //                     </>
        //                     <>
        //                         <NavLink
        //                             exact
        //                             to="/"
        //                             className="normal-case text-xl  px-6 py-1 text-white"
        //                             activeClassName="active"
        //                         >
        //                             My Toy
        //                         </NavLink>
        //                     </>
        //                     <>
        //                         <NavLink
        //                             exact
        //                             to="/"
        //                             className="normal-case text-xl  px-6 py-1 text-white"
        //                             activeClassName="active"
        //                         >
        //                             Add a Toy
        //                         </NavLink>
        //                     </>
        //                     <>
        //                         <NavLink
        //                             to="/blog"
        //                              className="normal-case text-xl  px-6 py-1 text-white"
        //                             activeClassName="active"
        //                         >
        //                             Blog
        //                         </NavLink>
        //                     </>

        //                 </ul>
        //             </div>
        //             {/* <div className="navbar-end rounded-full">
        //                 {user && 
        //                     <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                
        //                         <img className='rounded-full w-8' src={user.photoURL} />
                            
        //                     </div>
                            
        //                 }
        //                 <>
        //                     {user ? <button onClick={handleLogOut} className="normal-case text-xl px-6 py-1 text-white"
        //                         activeClassName="active">Logout</button> :
        //                         <Link to='/login'>
        //                             <button className="normal-case text-xl px-6 py-1 text-white"
        //                                 activeClassName="active">Login</button>
        //                         </Link>
        //                     }

        //                 </>
        //             </div> */}
        //         </div>
        //     </div>
        //     {/* navbar  */}
        // </div>
        <div className='text-center bg-orange-600 py-3 md:px-10'>
      <div className=''>
        <div className="navbar ">
          <div className="navbar-start pl-2">
            <div className="dropdown pe-5 md:pe-0">
              <label tabIndex={0} className="lg:hidden ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content font-bold space-y-3 mt-8 p-2 shadow text-orange-600 bg-gray-100 rounded-box w-52">
                <NavLink className="">Home</NavLink>
                <NavLink className="">All Toys</NavLink>
                <NavLink className="">My Toys</NavLink>
                <NavLink className="">Add a Toy</NavLink>
                <NavLink className="">Blog</NavLink>
                
              </ul>
            </div>
            <Link className="md:w-3/12 w-8/12" to=""><img className='md:h-12 h-8' src="https://i.ibb.co/HYyvRpC/Smile-emovebg-preview.png" /></Link>
            <h2 className="text-white  font-bold md:text-4xl text-sm  cursor-pointer">Cars ToyTopia</h2>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold space-x-8">
              <NavLink className="text-white"> Home</NavLink>
              <NavLink className="text-white"> All Toys</NavLink>
              <NavLink className="text-white"> My Toys</NavLink>
              <NavLink className="text-white"> Add a Toys</NavLink>
              <NavLink to="/blog" className="text-white"> Blog</NavLink>
              
            </ul>
          </div>
          <div className="navbar-end">
                   
                        <>
                            <div className="mr-10">
                                <div className="group relative flex justify-center ">
                                    
                                        <img className=" h-10 w-10 rounded-full" src='https://i.ibb.co/JdM2X7t/user.jpg' alt='' />
                                    
                                    <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                                        
                                    </span>
                                </div>
                            </div>
                            <div className=''>
                            <button  className=" p-1 mr-3  text-white font-normal md:font-bold rounded-md ">
                                Logout
                            </button>
                            </div>
                        </>
                    
                        <NavLink to="/login" activeClassName="bg-purple-500">
                            <button className=" p-1 text-white rounded-md font-normal md:font-bold ">Login</button>
                        </NavLink>
                    
                </div>
        </div>
      </div>
    </div>
    );
};

export default Navbar;