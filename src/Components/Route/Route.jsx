import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import SingIn from "../Pages/SingIn/SingIn";
import SingUp from "../Pages/SingUp/SingUp";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MyClasses from "../Dashboard/Dashboard/MyClasses/MyClasses";
import InstructorDashboard from "../Dashboard/instructorDashboard/instructorDashboard";
import AllUsers from "../Dashboard/Admin/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/sign-in",
        element: <SingIn></SingIn>,
      },
      {
        path: "sign-up",
        element: <SingUp></SingUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),

    children: [
      {
        path: "all-users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "my-classes",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "instructorDashboard",
        element: <InstructorDashboard></InstructorDashboard>,
      },
    ],
  },
]);
