import './App.css';
import { User } from './Person';
import { UserProvider } from "<div className="assets" />/UserContextProvider";

function App() {
  
  return (
    <UserProvider>
      <User name={"Pedro"}  age={22} isMarried={false} />{" "}
      <User name={"Colin"}  age={24} isMarried={true} />{" "}
    <UserProvider/>
  );
}

export default App;
