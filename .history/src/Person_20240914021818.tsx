interface Props {
    name: string;
    a
}

export const Person = (props: Props) => {
    return ( 
      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.name}</p>
        <p>This Person {props.isMarried ? "is married" : "is single"}</p>
      </div>
    );
};