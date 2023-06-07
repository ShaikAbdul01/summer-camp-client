import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";
import Typed from "react-typed";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("instructors.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedInstructors = data.instructors.sort(
          (a, b) => b.classesTaken - a.classesTaken
        );
        const topInstructors = sortedInstructors.slice(0, 6);
        setInstructors(topInstructors);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center m-12">
        <Typed
          strings={["Popular Instructors"]}
          typeSpeed={60}
          backSpeed={30}
          loop
        />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
