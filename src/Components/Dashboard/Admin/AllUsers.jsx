import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../UseHooks/useAxiosSecure";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const axiosSecure = useAxiosSecure();

  const fetchUsers = async () => {
    try {
      const response = await axiosSecure.get("/users"); 
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  };

  const refetchUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error refetching users:", error);
    }
  };

  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/admin/${user._id}`)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          refetchUsers();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You are now an admin",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error making user admin:", error);
      });
  };

  const handleMakeInstructor = (user) => {
    axiosSecure
      .patch(`/users/instructor/${user._id}`)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          refetchUsers();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You are now an instructor",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error making user instructor:", error);
      });
  };

  const handleDelete = (user) => {
    axiosSecure
      .delete(`/users/${user._id}`)
      .then((response) => {
        if (response.data.deletedCount > 0) {
          refetchUsers();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Delete successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  useEffect(() => {
    refetchUsers();
  }, []);

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <>
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn bg-blue-400 text-white btn-xs"
                      >
                        Make Admin
                      </button>
                    </>
                  )}

                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <>
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn bg-blue-400 text-white btn-xs"
                      >
                        Make Instructor
                      </button>
                    </>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost btn-xs bg-red-500 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
