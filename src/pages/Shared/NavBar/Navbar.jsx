
import { Link, NavLink } from 'react-router-dom';
import app from '../../../firebase/firebase.config';
import { getAuth } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const auth =getAuth(app)
const Navbar = () => {


  const [photoURL, setPhotoURL] = useState('');
    const [displayName, setDisplayName] = useState('');
    const { user, setUser } = useContext(AuthContext)

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
              setUser(user);
              setDisplayName(user.displayName);
              setPhotoURL(user.photoURL);
          } else {
              setUser(null);
              setDisplayName('');
              setPhotoURL('');
          }
      });
      return () => {
          unsubscribe();
      };
  }, []);

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
              <ul tabIndex={0} className="menu menu-compact dropdown-content  font-bold space-y-3 mt-8 p-2 shadow text-white bg-orange-600 rounded-box w-52">
                <NavLink className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Home</NavLink>
                <NavLink to='/alltoy' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">All Toys</NavLink>
                <NavLink to='/mytoy' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">My Toys</NavLink>
                <NavLink to='/addtoy' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Add a Toy</NavLink>
                <NavLink to="/blog" className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Blog</NavLink>
                
              </ul>
            </div>
            <Link className="md:w-3/12 w-8/12" to=""><img className='md:h-12 h-8' src="https://i.ibb.co/HYyvRpC/Smile-emovebg-preview.png" /></Link>
            <h2 className="text-white  font-bold md:text-4xl text-sm  cursor-pointer">Cars ToyTopia</h2>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold space-x-8">
          { user ? <div className="menu menu-horizontal px-1 font-bold space-x-8">
          <NavLink className="text-white hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> Home</NavLink>
          <NavLink to='/alltoy' className="text-white hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> All Toys</NavLink>
          <NavLink to='/mytoy' className="text-white hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> My Toys</NavLink>
          <NavLink to='/addtoy' className="text-white hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> Add a Toys</NavLink>
          <NavLink to="/blog" className="text-white hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> Blog</NavLink>
          </div> :
          <div className="menu menu-horizontal px-1 font-bold space-x-8">
          <NavLink className="text-white hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> Home</NavLink>
          <NavLink to='/alltoy' className="text-white hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> All Toys</NavLink>
          <NavLink to="/blog" className="text-white hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> Blog</NavLink>
          </div>
          }
              
            </ul>
          </div>
          <div className="navbar-end">
                   {user ?(
                        <>
                            <div className="mr-10">
                                <div className="group relative flex justify-center ">
                                    
                                        <img className=" h-10 w-10 rounded-full" src={photoURL} alt={displayName} />
                                    
                                    <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                                        {displayName}
                                    </span>
                                </div>
                            </div>
                            <div className=''>
                            <button onClick={()=> auth.signOut()} className=" p-1 mr-3  text-white font-normal md:font-bold rounded-md hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">
                                Logout
                            </button>
                            </div>
                        </>
                   ) : (
                        <NavLink to="/login" activeClassName="bg-purple-500">
                            <button className="  text-white rounded-md font-normal md:font-bold hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Login</button>
                        </NavLink>
                   )}
                </div>
        </div>
      </div>
    </div>
    );
};

export default Navbar;