import Question from "./Question";

const TitleAssignmet = () => {
  return (
    <div className="flex flex-col gap-y-10 divide-y-2 divide-dashed">
      <Question index={1} />
      <Question index={2} />
      <Question index={3} />
      <Question index={4} />
      <Question index={5} />
      <Question index={6} />
      <Question index={7} />
    </div>
  );
};

export default TitleAssignmet;
