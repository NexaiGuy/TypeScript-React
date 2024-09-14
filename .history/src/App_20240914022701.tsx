import './App.css';
import { Person } from './Person';

function App() {

  const fetchUser = () => ({name: "Pedro", age: 22, isMarried: null });
  const userFetched = fetchUser();
  return (
    <>
      <Person name={userFetched}  age={22} isMarried={false} />{" "}
      <Person name={"Colin"}  age={24} isMarried={true} />{" "}
    </>
  );
}

export default App;
