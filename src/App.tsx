import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

const App = () => {
  const personName = {
    first: "Leonardo",
    last: "DiCaprio",
  };

  const nameList = [
    {
      first: "Brad",
      last: "Pitt",
    },
    {
      first: "Jack",
      last: "Nicholson",
    },
    {
      first: "Anthony",
      last: "Hopkins",
    },
  ];
  return (
    <div>
      <Greet name="Marianna" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
    </div>
  );
};

export default App;
