const InstructorCard = ({ instructor }) => {
  // console.log(instructor);
  const { image, name, email, classesTaken, classNames } = instructor;
  return (
    <>
      <div className="bg-white shadow-lg hover:shadow-xl transition duration-500 rounded-lg w-full">
        <img
          className="rounded-t-lg w-full lg:h-[250px]"
          src={image}
          alt={name}
        />
        <div className="py-6 px-8 rounded-lg bg-white">
          <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
            {name}
          </h1>
          <p className="text-gray-700 tracking-wide">Email: {email}</p>
          <p className="text-gray-700 tracking-wide">
            Classes Taken: {classesTaken}
          </p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Classes:</h2>
            <ul className="list-disc list-inside">
              {classNames.map((className) => (
                <li key={className} className="text-gray-700">
                  {className}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorCard;
