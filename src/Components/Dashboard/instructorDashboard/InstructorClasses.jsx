import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const InstructorClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  //   console.log(classes);

  useEffect(() => {
    fetch(`https://artistry-academy-server.vercel.app/addClass/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, [classes, user]);

  const handleUpdate = (classId) => {
    // TODO
    // Handle the update logic here
    // You can use the classId to identify the class to update
    console.log("Update class:", classId);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center m-8">Instructor Classes</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-6 text-left">Class Name</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Total Enrolled Students</th>
              <th className="py-3 px-6 text-left">Feedback</th>
              <th className="py-3 px-6 text-left">Update</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem, index) => (
              <tr
                key={classItem.classId}
                className={index % 2 === 0 ? "bg-blue-100" : "bg-blue-200"}
              >
                <td className="py-4 px-6">{classItem.className}</td>
                <td className="py-4 px-6">{classItem.status}</td>
                <td className="py-4 px-6">{classItem.totalEnrolledStudents}</td>
                <td className="py-4 px-6">
                  {classItem.status === "denied" ? classItem.feedback : "-"}
                </td>
                <td className="py-4 px-6">
                  {classItem.status !== "pending" && (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleUpdate(classItem.classId)}
                    >
                      Update
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorClasses;
