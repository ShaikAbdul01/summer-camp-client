import { useContext, useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import { AuthContext } from "../../../Provider/AuthProvider";

const Classes = () => {
  const {user}=useContext(AuthContext)
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {classes.map((classItem) => (
        <ClassCard key={classItem._id} user={user} classItem={classItem} />
      ))}
    </div>
  );
};

export default Classes;
