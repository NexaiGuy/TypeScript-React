import { useState } from "react";

export interface Person {
    name: string;
    age: number;
    isMarried: boolean;
}

export const Person = (props: Person) => {
  const [personBio, set] = useState<string | null>(null);

  return ( 
    <div>
      {isShowInfo && (
          <>
          <p>Name: {props.name}</p>
          <p>Age: {props.name}</p>
          <p>This Person {props.isMarried ? "is married" : "is single"}</p>
          </>
      )}

      <p> {props.name} Bio: </p>
      <input />
    </div>
  );
};