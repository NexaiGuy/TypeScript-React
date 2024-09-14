import './App.css';
import { User, Countries } from './Person';
import { UserProvider } from "./UserContextProvider";
import { UserEditor } from "./UserProfileEditor";

function App() {
  return (
    <UserProfileEditor>
      <User 
        name={"Pedro"}  
        age={22} 
        isMarried={false} 
        country={Countries.Brazil} 
      />{" "}
      <User 
        name={"Colin"}  
        age={24} 
        isMarried={true} 
        country={Countries.India} 
      />{" "}
    </UserProfileEditor>
  );
}

export default App;
