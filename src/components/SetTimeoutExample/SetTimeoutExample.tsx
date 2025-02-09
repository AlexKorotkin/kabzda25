import {useEffect, useState} from "react";




const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("SetTimeoutExample");



    useEffect(() => {

        setTimeout(()=>{
            setCounter(counter => counter + 1)
        },1000)
    },[counter]);


    return (
        <div>
            hello {counter}
    </div>
);
};

export default SetTimeoutExample;