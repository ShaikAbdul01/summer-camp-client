
const InstructorCard = ({ instructor }) => {
    // console.log(instructor);
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <img
        src={instructor.image}
        alt={instructor.name}
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="text-lg font-semibold my-2">{instructor.name}</h3>
      <p className="text-gray-500">{instructor.email}</p>
      {instructor.classesTaken && (
        <p>Number of Classes Taken: {instructor.classesTaken}</p>
      )}
      {instructor.classNames && (
        <div>
          <p className="text-lg font-semibold my-2">Classes Taken:</p>
          <ul className="flex flex-wrap gap-4">
            {instructor.classNames.map((className) => (
              <li key={className} className="px-2 py-1 bg-gray-200 rounded-md">
                {className}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InstructorCard;
