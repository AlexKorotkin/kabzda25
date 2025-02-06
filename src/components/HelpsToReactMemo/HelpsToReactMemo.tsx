import React, {useMemo, useState} from "react";


const UsersSecret = (props: {users: Array<string> } ) =>{
    return <div>
        {props.users.map((u,i) => <div key = {i}>{u}</div>)}
    </div>
};

const Users = React.memo(UsersSecret);

const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<string[]>(["Енат", "Кошка", "Собака"])

    const filteredUsers = useMemo(()=> {
        return users.filter(u => u.toLowerCase().indexOf("а") > -1)
    },[users])

    const addUsers = () => {
       const newUsers = [...users, "Пчела " + new Date().getTime()]
        return setUsers(newUsers)
    }
    return (
        <div>
            <button style={{backgroundColor: "blueviolet", padding: "5px"}} onClick={()=>setCounter(counter+1)}>+</button>
            <button style={{backgroundColor: "blueviolet", padding: "5px"}} onClick={addUsers}>add user</button>
            {counter}
            <Users users={filteredUsers}/>
        </div>
    );
};

export default HelpsToReactMemo;