import React, {useState} from "react";

const Counter = (props: {count: number}) =>{
    return <span>
        {props.count}
    </span>
};
const UsersSecret = (props: {users: Array<string> } ) =>{
    return <div>
        {props.users.map((u,i) => <div key = {i}>{u}</div>)}
    </div>
};

const Users = React.memo(UsersSecret)

const ExampleReactMemo = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<string[]>(["Енот", "Кошка", "Собака"])

    const addUsers = () => {
        return setUsers([...users, "Животное " + new Date().getTime()])
    }

    return (
        <div>
            <button style={{backgroundColor: "blueviolet", padding: "5px"}} onClick={()=>setCounter(counter+1)}>+</button>
            <Counter count = {counter}/>
            <button style={{backgroundColor: "blueviolet", padding: "5px"}} onClick={addUsers}>add Users</button>
            <Users users={users}/>
        </div>
    );
};

export default ExampleReactMemo;