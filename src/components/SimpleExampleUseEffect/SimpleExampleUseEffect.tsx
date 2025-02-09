import {useEffect, useState} from "react";


const SimpleExampleUseEffect = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1)
    console.log("SimpleExampleUseEffect");

    useEffect(() => {
        console.log("useEffect every render");
        document.title = counter.toString();
    });

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)");
        document.title = counter.toString();
    },[]);

    useEffect(() => {
        console.log("useEffect  first render and every counter change");
        document.title = counter.toString();
    },[counter]);


    return (
        <div>
            hello {counter} {fake}
            <button  onClick={()=> setCounter(counter +1)} >counter +</button>
            <button  onClick={()=> setFake(fake +1)} > fake +</button>
        </div>
    );
};

export default SimpleExampleUseEffect;