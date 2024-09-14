import './App.css';
import { User, Countries } from './Person';
import { UserProvider } from "./UserContextProvider";

function App() {
  
  return (
    <UserProvider>
      <User name={"Pedro"}  age={22} isMarried={false} country={Countries} />{" "}
      <User name={"Colin"}  age={24} isMarried={true} />{" "}
    </UserProvider>
  );
}

export default App;
