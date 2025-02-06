import React, {useCallback, useState} from "react";


const UsersBook = (props: {addBook: ()=> void } ) =>{
    return <div>
        <button style={{backgroundColor: "blueviolet", padding: "5px"}} onClick={props.addBook}>add user</button>
    </div>
};

const Book = React.memo(UsersBook); // закэшировали

const LikeUseCallback = () => {
    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState<string[]>(["JavaScript", "React", "HTML"])


    const addBook = useCallback(() => {
        console.log(books)
        const newUsers = [...books, "Angular " + new Date().getTime()]
        return setBooks(newUsers)
    },[books]);



    return (
        <div>
            <button style={{backgroundColor: "blueviolet", padding: "5px"}} onClick={()=>setCounter(counter+1)}>+</button>
            {counter}
            <Book  addBook={addBook}/>
        </div>
    );
};

export default LikeUseCallback;