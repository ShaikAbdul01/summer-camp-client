// const axiosSecure = useAxiosSecure();

import  { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/classes")
      .then((response) => {
        setClasses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, []);

  const handleApprove = (classId) => {
    axios
      .patch(`http://localhost:5000/classes/${classId}/status`, {
        status: "approved",
      })
      .then(() => {
        const updatedClasses = classes.map((classItem) => {
          if (classItem.classId === classId) {
            return {
              ...classItem,
              status: "approved",
            };
          }
          return classItem;
        });
        setClasses(updatedClasses);
      })
      .catch((error) => {
        console.error("Error approving class:", error);
      });
  };

  const handleDeny = (classId) => {
    axios
      .patch(`http://localhost:5000/classes/${classId}/status`, {
        status: "denied",
      })
      .then(() => {
        const updatedClasses = classes.map((classItem) => {
          if (classItem.classId === classId) {
            return {
              ...classItem,
              status: "denied",
            };
          }
          return classItem;
        });
        setClasses(updatedClasses);
      })
      .catch((error) => {
        console.error("Error denying class:", error);
      });
  };

  const handleFeedback = (classId) => {
    Swal.fire({
      title: "Send Feedback",
      input: "text",
      inputLabel: "Feedback",
      inputPlaceholder: "Enter your feedback...",
      showCancelButton: true,
      confirmButtonText: "Send",
      cancelButtonText: "Cancel",
      showLoaderOnConfirm: true,
      preConfirm: (feedback) => {
        if (!feedback) {
          Swal.showValidationMessage("Feedback cannot be empty");
        } else {
          return axios
            .post(`http://localhost:5000/classes/${classId}/feedback`, {
              feedback,
            })
            .then(() => {
              const updatedClasses = classes.map((classItem) => {
                if (classItem.classId === classId) {
                  return {
                    ...classItem,
                    status: "feedback sent",
                  };
                }
                return classItem;
              });
              setClasses(updatedClasses);
            })
            .catch((error) => {
              console.error("Error sending feedback:", error);
              Swal.showValidationMessage("Failed to send feedback");
            });
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center m-8">Manage Classes</h2>

      {classes.map((classItem) => (
        <div key={classItem._id} className=" p-4 mb-4">
          <div className="lg:flex justify-between items-center space-y-2">
            <div>
              <img
                src={classItem.image}
                alt="Class"
                className="w-20 h-20 rounded-full object-cover mr-4"
              />
              <p className="text-xl font-bold text-gray-800">
                {classItem.className}
              </p>
              <p className="text-gray-600">{classItem.instructorName}</p>
              <p className="text-gray-600">
                Instructor Email: {classItem.instructorEmail}
              </p>
              <p className="text-gray-600">
                Available Seats: {classItem.availableSeats}
              </p>
              <p className="text-gray-600">Price: {classItem.price}</p>
              <p className="text-gray-600">Status: {classItem.status}</p>
            </div>
            <div className="">
              <button
                disabled={classItem.status !== "pending"}
                onClick={() => handleApprove(classItem._id)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Approve
              </button>
              <button
                disabled={classItem.status !== "pending"}
                onClick={() => handleDeny(classItem._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Deny
              </button>
              <button
                onClick={() => handleFeedback(classItem._id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageClasses;
