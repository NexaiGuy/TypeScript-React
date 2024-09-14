import './App.css';
import { User } from './Person';

function App() {
  
  return (
    <UserProvide>
      <User name={"Pedro"}  age={22} isMarried={false} />{" "}
      <User name={"Colin"}  age={24} isMarried={true} />{" "}
    <UserProvider/>
  );
}

export default App;
