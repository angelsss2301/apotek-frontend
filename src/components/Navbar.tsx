const Navbar = () => {
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                        htmlFor="my-drawer-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                </div>
                <a className="btn btn-ghost normal-case text-2xl ml-2 text-sky-800">
                    Jayapan
                </a>
            </div>

            <div className="navbar-end mr-8 ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-20 rounded-full ">
                        <img src="../../public/img/profile.jpg" />
                    </div>
                </label>{" "}
            </div>
        </div>
    );
};

export default Navbar;
