import { useContext } from "react";
import { UserContext } from './UserContextProvider';

interface Props {
    name: string;
    age: number;
    isMarried: boolean;
}

export const User = (props: Props) => {

    const {} = useContext<>();
  return ( 
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.name}</p>
      <p>This Person {props.isMarried ? "is married" : "is single"}</p>
    </div>
  );
};