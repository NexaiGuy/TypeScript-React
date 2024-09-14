interface Props {
    name: string;
    age: number;
    isMarried: boolean;
    country: string;
}

export const User = (props: Props) => {

  //  const {users, updateUser, deleteUser} = useContext(UserContext);
  return ( 
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.name}</p>
      <p>This Person {props.isMarried ? "is married" : "is single"}</p>
    </div>
  );
};