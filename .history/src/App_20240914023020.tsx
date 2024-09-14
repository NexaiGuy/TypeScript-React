import './App.css';
import { Person } from './Person';

function App() {

  const fetchUser = () => ({name: "Pedro", age: 22, isMarried: null });
  const userFetched = fetchUser();
  return (
    <>
      <Person 
      name={userFetched.name}  age={userFetched.age} isMarried={userFetched.isMarried} />{" "}
      <Person name={"Colin"}  age={24} isMarried={true} />{" "}
    </>
  );
}

export default App;
