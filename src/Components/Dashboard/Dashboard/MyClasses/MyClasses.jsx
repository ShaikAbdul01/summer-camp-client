import { useClassItem } from "../../../UseHooks/UseClassItem";

const MyClasses = () => {
  const { classes, isLoading } = useClassItem();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(classes);
  return (
    <div>
      <h3 className="text-4xl">Classes {classes.length}</h3>
      {classes.map((classItem) => (
        <div key={classItem.id}>
          <h4>{classItem.title}</h4>
          {/* Render other class item details */}
        </div>
      ))}
    </div>
  );
};

export default MyClasses;
