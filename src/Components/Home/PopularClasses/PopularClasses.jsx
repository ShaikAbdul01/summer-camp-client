import Typed from "react-typed";
import PopularItem from "./PopularItem";
import { useQuery } from "@tanstack/react-query";

const PopularClasses = () => {
  /*  const { data: classes = [] } = useQuery(["classes"], () =>
    axiosSecure.get("/classes").then((res) => res.data)
  ); */

  const { data: classes = [] } = useQuery(["classes"], () =>
    fetch("http://localhost:5000/classes").then((res) => res.json())
  );

  const sortedClasses = [...classes].sort((a, b) => b.students - a.students);
  const topClasses = sortedClasses.slice(0, 6);

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
        {topClasses.map((classItem) => (
          <PopularItem key={classItem._id} classItem={classItem} />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
