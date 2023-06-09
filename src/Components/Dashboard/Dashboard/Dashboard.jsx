/* import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider"; */
import { Link, Outlet } from "react-router-dom";
// import { useClassItem } from "../../UseHooks/UseClassItem";

const Dashboard = () => {
  // const [classItem] = useClassItem();
  const isAdmin = !false;

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
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
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard/all-users">All Users</Link>
                </li>
              </>
            ) /* : instructor ? (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard/instructorDashboard">
                    instructorDashboard
                  </Link>
                </li>
              </>
            )  */: (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard/my-classes">My Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/my-enrolled-classes">
                    My Enrolled Classes
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
