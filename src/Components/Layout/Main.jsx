import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="my-12">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Main;