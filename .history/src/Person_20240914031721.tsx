import { useState } from "react";

export interface Person {
    name: string;
    age: number;
    isMarried: boolean;
}

export const Person = (props: Person) => {
  const [personBio, setPersonBio] = useState<string | null>(null);

  return ( 
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.name}</p>
      <p>This Person {props.isMarried ? "is married" : "is single"}</p>

      <p> 

        {props.name} Bio: {!personBio ? "No Bio Available" : personBio} 
      </p>
      <input />
    </div>
  );
};