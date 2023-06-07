import { useEffect, useState } from "react";
import PopularItem from "./PopularItem";
import Typed from "react-typed";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        const sortedClasses = data.sort(
          (a, b) => b.students - a.students
        );
        const topClasses = sortedClasses.slice(0, 6);
        setClasses(topClasses);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center m-12">
        <Typed
          strings={["Popular Classes"]}
          typeSpeed={60}
          backSpeed={30}
          loop
        />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <PopularItem key={classItem._id} classItem={classItem} />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
