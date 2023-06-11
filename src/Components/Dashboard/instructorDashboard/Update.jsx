import { useEffect, useState } from "react";

const Update = ({ classId }) => {
  //  console.log(classId);
  const [classData, setClassData] = useState(null);

  useEffect(() => {
    // Fetch the class data using the classId
    // You can use the classId to make an API call or retrieve the data from state/context
    // Update the classData state with the fetched data

    // Example API call
    fetch(`https://artistry-academy-server.vercel.app/classes/${classId}`)
      .then((res) => res.json())
      .then((data) => setClassData(data));
  }, []);

//   console.log(classData);

  if (!classData) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h2>Update Class: {classData.className}</h2>
    </>
  );
};

export default Update;
