
import { useQuery } from "@tanstack/react-query";
import Typed from "react-typed";
import InstructorCard from "../../Pages/Instructors/instructorCard";

const PopularInstructors = () => {
  const { data: instructors = [] } = useQuery(["instructors"], () =>
    fetch("https://artistry-academy-server.vercel.app/instructors").then((res) => res.json())
  );

  const sortedInstructors = [...instructors].sort(
    (a, b) => b.classesTaken - a.classesTaken
  );
  const topInstructors = sortedInstructors.slice(0, 6);

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
        {topInstructors.map((instructor) => (
          <InstructorCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
