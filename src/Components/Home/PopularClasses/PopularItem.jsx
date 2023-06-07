import { Link } from "react-router-dom";

const PopularItem = ({ classItem }) => {
  const {
    image,
    name,
    instructorName,
    availableSeats,
    price,
    students,
    category,
  } = classItem;
  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition duration-500 rounded-lg w-full">
      <img
        className="rounded-t-lg w-full  lg:h-[250px] "
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
        <Link to="/classes"><button className="mt-6 py-2 px-4 bg-blue-400 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
          Buy Now
        </button></Link>
        
      </div>
    </div>
  );
};

export default PopularItem;
