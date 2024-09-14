import { useState } from "react";

export interface Person {
    name: string;
    age: number;
    isMarried: boolean;
}

export const Person = (props: Person) => {
  const [isShowInfo, setShowInfo] = useState<boolean>(false);


  return ( 
    <div>
      {isShowInfo && (
          <>
          <p>Name: {props.name}</p>
          <p>Age: {props.name}</p>
          <p>This Person {props.isMarried ? "is married" : "is single"}</p>
          </>
      )}

      <p> {props.name}</p>
      <input />
    </div>
  );
};