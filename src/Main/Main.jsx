import { Outlet } from "react-router-dom";
import Navbar from "../CommonComponents/Navbar";
import Footer from "../CommonComponents/Footer";



const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;