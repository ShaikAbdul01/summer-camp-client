import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useClassItem } from "../../../UseHooks/UseClassItem";
import { Link } from "react-router-dom";

const MyClasses = () => {
  const [classItem, refetch] = useClassItem();
// console.log(classItem);
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classItem/${item}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classItem?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.instructorName}</td>
                <td>{item.availableSeats}</td>
                <td>${item.price}</td>
                <td>
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-xs bg-red-500 text-white mr-2"
                    >
                      <FaTrashAlt />
                    </button>
                    <Link to={`/dashboard/payment`}>
                      <button className="btn bg-blue-400 text-white btn-xs">
                        Pay Now
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
