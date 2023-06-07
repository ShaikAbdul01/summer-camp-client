import CountUp from "react-countup";
import Typed from "react-typed";

const ExtraSection = () => {
  const achievementsData = [
    { title: "Projects Completed", value: 1250 },
    { title: "Years in Business", value: 10 },
    { title: "Satisfied Clients", value: 2500 },
  ];

  return (
    <>
      <h2 className="text-4xl font-bold text-center my-12">
        <Typed
          strings={["Our Accomplishments"]}
          typeSpeed={60}
          backSpeed={30}
          loop
        />
      </h2>

      <section className="bg-gray-200 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievementsData.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {achievement.title}
                </h3>
                <CountUp
                  start={0}
                  end={achievement.value}
                  duration={10}
                  separator=","
                  className="text-4xl font-bold text-blue-500"
                />
                <p className="text-gray-600 mt-2">Total</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExtraSection;
