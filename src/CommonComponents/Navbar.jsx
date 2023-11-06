




import { useContext } from 'react';
import './Navbar.css'
import { Link, NavLink, } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // const [isDropdownOpen, setDropdownOpen] = useState(false);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }

    //when user clicks on him profile



    return (
        <div>
            {/* navbar  */}
            <div className="bg-[#E21B70] ">
                <div className="navbar w-10/12 mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                tabIndex={0}
                                className="lg:hidden text-white p-12"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu gap-8 items-center menu-compact dropdown-content mt-3 shadow bg-orange-600 rounded w-40"
                            >
                                <li>
                                    <NavLink
                                        to="/" className="normal-case text-xl text-white" activeClassName="active">
                                        Home
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/allfooditems"
                                        className="normal-case text-xl text-white"
                                        activeClassName="active"
                                    >
                                        All Food Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/blog"
                                        className="normal-case text-xl text-white"
                                        activeClassName="active"
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                                { user?.email && <li>
                                    <NavLink
                                        to="/addafooditem"
                                        className="normal-case text-xl text-white"
                                        activeClassName="active"
                                    >
                                        Add A Food Item
                                    </NavLink>
                                </li>}

                                



                            </ul>
                        </div>
                        <Link className="md:w-3/12 w-8/12"><img src="https://i.ibb.co/2gytMjj/logo.png" alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal gap-8 items-center px-1">
                            <>
                                <NavLink
                                    exact
                                    to="/"
                                    className="normal-case text-xl  px-6 py-1 text-white"
                                    activeClassName="active"
                                >
                                    Home
                                </NavLink>
                            </>

                            <>
                                <NavLink
                                    to="/allfooditems"
                                    className="normal-case text-xl text-white"
                                    activeClassName="active"
                                >
                                    All Food Items
                                </NavLink>
                            </>
                            <>
                                <NavLink
                                    to="/blog"
                                    className="normal-case text-xl text-white"
                                    activeClassName="active"
                                >
                                    Blog
                                </NavLink>
                            </>
                            { user?.email && <>
                                <NavLink
                                    to="/addafooditem"
                                    className="normal-case text-xl text-white"
                                    activeClassName="active"
                                >
                                    Add A Food Item
                                </NavLink>
                            </>}

                            



                        </ul>
                    </div>

                    <div className="navbar-end">
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                {user ? (
                                    <div className="flex items-center">
                                        <button className='flex items-center'>
                                            <img className=' rounded-full w-8 h-8 mr-3' src={user.photoURL} alt={user.displayName} />
                                            <span data-tip={user.displayName} className="text-white">{user.displayName}</span>
                                        </button>

                                        <button onClick={handleLogOut} className="text-xl text-white px-3 font-medium ml-3">
                                            Logout
                                        </button>


                                    </div>
                                ) : (
                                    <NavLink to="/login"
                                        className="text-white" activeClassName="active">
                                        <button className="text-xl px-3 font-medium">
                                            Login
                                        </button>
                                    </NavLink>
                                )}


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;













