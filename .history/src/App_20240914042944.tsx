import './App.css';
import { User } from './Person';

function App() {
  
  return (
    <UserPro>
      <User name={"Pedro"}  age={22} isMarried={false} />{" "}
      <User name={"Colin"}  age={24} isMarried={true} />{" "}
    </>
  );
}

export default App;
