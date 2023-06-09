import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ClassCard = ({ classItem }) => {
  const {
    _id,
    image,
    name,
    instructorName,
    availableSeats,
    price,
    students,
    category,
  } = classItem;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddtoClassItem = (classItem) => {
    console.log(classItem);
    if (user && user.email) {
      const classItem = {
        classItemId: _id,
        name,
        image,
        price,
        students,
        category,
        instructorName,
        availableSeats,
        email: user.email,
      };
      fetch(`http://localhost:5000/classItem`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classItem)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Class added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/sign-in", { state: { from: location } });
        }
      });
    }
  };

  /*  
 isLoggedIn, isAdmin 
 const handleSelect = () => {
    if (!isLoggedIn) {
      alert("Please log in to select the course.");
      return;
    }

    if (availableSeats === 0 || isAdmin) {
      return;
    }

    // Add your logic for selecting the class here
  }; */

  return (
    <div
      className={`bg-white shadow-lg hover:shadow-xl transition duration-500 rounded-lg w-full`}
    >
      <img
        className="rounded-t-lg w-full lg:h-[250px]"
        src={image}
        alt={name}
      />
      <div className="py-6 px-8 rounded-lg bg-white">
        <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
          {name}
        </h1>
        <p className="text-gray-700 tracking-wide">
          Instructor: {instructorName}
        </p>
        <p className="text-gray-700 tracking-wide">
          Available Seats: {availableSeats}
        </p>
        <p className="text-gray-700 tracking-wide">Price: ${price}</p>
        <p className="text-gray-700 tracking-wide">
          Number of Students: {students}
        </p>
        <p className="text-gray-700 tracking-wide">Category: {category}</p>
        <button
          onClick={() => handleAddtoClassItem(classItem)}
          className="mt-6 py-2 px-4 bg-blue-400 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          Buy Now
        </button>
        {/* <button
          className={`mt-6 py-2 px-4 bg-blue-400 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 ${availableSeats === 0 || isAdmin ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleSelect}
          disabled={availableSeats === 0 || isAdmin}
        >
          {availableSeats === 0 ? "Not Available" : "Buy Now"}
        </button> */}
      </div>
    </div>
  );
};

export default ClassCard;
