import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Typed from "react-typed";

// import { useClassItem } from "../../UseHooks/UseClassItem";

const Dashboard = () => {
  // const [classItem] = useClassItem();
  const { user } = useContext(AuthContext);
  const isAdmin = !false;
  const isInstructor = false;
  const isStudent = false;

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <h2 className="text-3xl font-bold text-center m-12">
            <Typed
              strings={[`Wecome ${user.email}`]}
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
            {/* Sidebar content here */}

            {isAdmin && (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard/all-users">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageClasses">Manage Classes</Link>
                </li>
              </>
            )}

            {isInstructor && (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard/add-class">Add a Class</Link>
                </li>
                <li>
                  <Link to="/dashboard/InstructorClasses">My Classes</Link>
                </li>
              </>
            )}

            {isStudent && (
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
