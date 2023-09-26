import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
    return (
        <div className="grid grid-cols-12" style={{"gridTemplateRows": "80px 1fr 1fr"}}>
            <div className="col-start-3 col-end-13 ">
                <Navbar />
            </div>
            <div className="col-start-1 row-span-full">
                <Sidebar />
            </div>
            <div className="col-span-10 relative left-[200px]">
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;
