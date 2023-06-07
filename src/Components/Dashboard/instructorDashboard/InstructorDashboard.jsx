import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const InstructorDashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl text-center mb-4">Instructor Dashboard</h2>

      <div className="w-full mx-auto p-12">
        <form className="bg-white rounded-lg shadow-md p-12">
          <div className="mb-4">
            <label htmlFor="className" className="text-gray-700">
              Class Name:
            </label>
            <input
              type="text"
              id="className"
              name="className"
              required
              className="form-input mt-1 block w-full border-2 px-16 py-2 rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="className" className="text-gray-700">
              Class Image:
            </label>
            <input
              type="url"
              id="classImage"
              name="classImage"
              required
              className="form-input mt-1 block w-full border-2 "
            />
          </div>

          {/* <div className="mb-4">
              <label htmlFor="classImage" className="text-gray-700">
                Class Image:
              </label>
              <input
                type="file"
                id="classImage"
                name="classImage"
                required
                className="form-input mt-1 block w-full"
              />
            </div> */}

          <div className="mb-4">
            <label htmlFor="instructorEmail" className="text-gray-700">
              Instructor Email:
            </label>
            <input
              type="email"
              id="instructorEmail"
              name="instructorEmail"
              defaultValue={user?.email}
              readOnly
              className="form-input mt-1 block w-full border-2 bg-gray-100 cursor-not-allowed px-16 py-2 rounded-xl"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="availableSeats" className="text-gray-700">
              Available Seats:
            </label>
            <input
              type="number"
              id="availableSeats"
              name="availableSeats"
              required
              className="form-input mt-1 block w-full border-2 px-16 py-2 rounded-xl"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="price" className="text-gray-700">
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              required
              className="form-input mt-1 block w-full border-2 px-16 py-2 rounded-xl"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default InstructorDashboard;
