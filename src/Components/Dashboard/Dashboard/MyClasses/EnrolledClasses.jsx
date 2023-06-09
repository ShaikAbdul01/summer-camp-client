import Typed from "react-typed";

const EnrolledClasses = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center m-12">
        <Typed
          strings={[`Enrolled Classes`]}
          typeSpeed={60}
          backSpeed={30}
          loop
        />
      </h2>
    </>
  );
};

export default EnrolledClasses;
