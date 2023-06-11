import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddClasses = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const className = form?.className.value;
    const classImage = form?.classImage.value;
    const instructorEmail = form?.instructorEmail.value;
    const availableSeats = form?.availableSeats.value;
    const price = form?.price.value;

    const addClass = {
      classImage,
      className,
      email: instructorEmail,
      availableSeats,
      price,
      status: "pending",
    };

    fetch("https://artistry-academy-server.vercel.app/addClass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Good job!", "Class Added successfully!", "success");
        }
      })
      .catch((error) => {
        console.error("Error adding class:", error);
      });
  };

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center m-12">Add a Class</h2>
      <div className="w-full mx-auto p-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-12"
        >
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
            <label htmlFor="classImage" className="text-gray-700">
              Class Image:
            </label>
            <input
              type="url"
              id="classImage"
              name="classImage"
              required
              className="form-input mt-1 block w-full border-2"
            />
          </div>

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

          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            type="submit"
            value="Add Class"
          />
        </form>
      </div>
    </div>
  );
};

export default AddClasses;
