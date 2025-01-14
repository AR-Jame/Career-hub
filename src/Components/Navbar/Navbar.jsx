import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="font-manrop mx-[5%] lg:mx-[10%] py-4">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to="/">Statistics</NavLink>
                            <NavLink to="/jobs">Applied Jobs</NavLink>
                            <NavLink to="/form">Log In</NavLink>
                            
                        </ul>
                    </div>
                    <a className="text-4xl font-extrabold">Career Hub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 space-x-4 font-medium text-lg">
                        <NavLink to="/">Statistics</NavLink>
                        <NavLink to="/jobs">Applied Jobs</NavLink>
                        <NavLink to="/form">Log In</NavLink>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-xl text-white bg-[#9873FF] hover:bg-[#9873FF] font-semibold">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;