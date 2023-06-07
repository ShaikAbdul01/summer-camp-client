/* import React from "react";
import { useState, useEffect } from "react";

const StudentDashboard = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  // Fetch selected classes
  useEffect(() => {
    fetchSelectedClasses();
  }, []);

  const fetchSelectedClasses = async () => {
    try {
      const response = await fetch("/http://localhost:5000/student/classes");
      const data = await response.json();
      setSelectedClasses(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteClass = async (classId) => {
    try {
      await fetch(`/api/student/classes/${classId}`, { method: "DELETE" });
      fetchSelectedClasses();
    } catch (error) {
      console.log(error);
    }
  };

  const enrollClass = async (classId) => {
    try {
      await fetch(`/http://localhost:5000/student/classes/${classId}/enroll`, { method: "POST" });
      fetchSelectedClasses();
      fetchEnrolledClasses();
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch enrolled classes
  useEffect(() => {
    fetchEnrolledClasses();
  }, []);

  const fetchEnrolledClasses = async () => {
    try {
      const response = await fetch("/api/student/classes/enrolled");
      const data = await response.json();
      setEnrolledClasses(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>My Selected Classes</h2>
      {selectedClasses.map((class) => (
        <div key={class.id}>
          <h3>{class.name}</h3>
          <p>Instructor: {class.instructor}</p>
          <p>Price: {class.price}</p>
          <button onClick={() => deleteClass(class.id)}>Delete</button>
          <button onClick={() => enrollClass(class.id)}>Pay</button>
        </div>
      ))}

      <h2>My Enrolled Classes</h2>
      {enrolledClasses.map((class) => (
        <div key={class.id}>
          <h3>{class.name}</h3>
          <p>Instructor: {class.instructor}</p>
          <p>Price: {class.price}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentDashboard;
 */