import { useState, useEffect } from "react";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch classes data from the server
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  console.log(classes);
  const handleApprove = (classId) => {
    // Update the class status to approved
    // Disable the approve and deny buttons for the class
    console.log("Approve class:", classId);
  };

  const handleDeny = (classId) => {
    // Update the class status to denied
    // Disable the approve and deny buttons for the class
    console.log("Deny class:", classId);
  };

  const handleFeedback = (classId) => {
    // Open a modal or navigate to another route to provide feedback for the class
    console.log("Send feedback for class:", classId);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center m-8">Manage Classes</h2>

      {classes.map((classItem) => (
        <div key={classItem.classId} className=" p-4 mb-4">
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
                Available Seats: {classItem.availableSeats}
              </p>
              <p className="text-gray-600">Price: {classItem.price}</p>
              <p className="text-gray-600">Status: {classItem.status}</p>
            </div>
            <div className="">
              <button
                disabled={classItem.status !== "pending"}
                onClick={() => handleApprove(classItem.classId)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Approve
              </button>
              <button
                disabled={classItem.status !== "pending"}
                onClick={() => handleDeny(classItem.classId)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Deny
              </button>
              <button
                onClick={() => handleFeedback(classItem.classId)}
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
