type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

const Person = (props: PersonProps) => {
  return (
    <>
      <div>{props.name.first}</div>
      <div>{props.name.last}</div>
    </>
  );
};

export default Person;
