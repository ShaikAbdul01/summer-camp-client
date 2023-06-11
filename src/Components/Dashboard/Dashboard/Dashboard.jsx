import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Typed from "react-typed";
import {
  RiHomeLine,
  RiUserLine,
  RiFileList2Line,
  RiAddLine,
} from "react-icons/ri";
import { motion } from "framer-motion";

import UseAdmin from "../../UseHooks/UseAdmin";
import UseInstructor from "../../UseHooks/UseInstructor";
import UseStudent from "../../UseHooks/UseStudent";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
 /*  const [isAdmin] = UseAdmin();
  const [isInstructor] = UseInstructor();
  const [isStudent] = UseStudent(); */
  const isAdmin = false;
  const isInstructor = false;
  const isStudent = !false;

  const menuItems = [{ to: "/", label: "Home", icon: RiHomeLine }];

  if (isAdmin) {
    menuItems.push({
      to: "/dashboard/all-users",
      label: "All Users",
      icon: RiUserLine,
    });
    menuItems.push({
      to: "/dashboard/manageClasses",
      label: "Manage Classes",
      icon: RiFileList2Line,
    });
  } else if (isInstructor) {
    menuItems.push({
      to: "/dashboard/add-class",
      label: "Add a Class",
      icon: RiAddLine,
    });
    menuItems.push({
      to: "/dashboard/InstructorClasses",
      label: "My Classes",
      icon: RiFileList2Line,
    });
  } else if (isStudent) {
    menuItems.push({
      to: "/dashboard/my-classes",
      label: "My Classes",
      icon: RiFileList2Line,
    });
    menuItems.push({
      to: "/dashboard/my-enrolled-classes",
      label: "My Enrolled Classes",
      icon: RiUserLine,
    });
  }

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center m-12">
            <Typed
              strings={[`Welcome ${user.email}`]}
              typeSpeed={60}
              backSpeed={30}
              loop
            />
          </h2>

          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={item.to}>
                  <item.icon className="mr-2 inline-block" />
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
