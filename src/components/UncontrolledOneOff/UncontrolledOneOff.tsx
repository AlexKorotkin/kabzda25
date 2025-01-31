import {useState} from "react";

/*type OneOffPropsType ={
    on: boolean,

}*/

const UncontrolledOneOff = () => {
    const [on, setOn] = useState(false);

    const onStyle = {
        display: "inline-block",
        width:"30px",
        height:"30px",
        backgroundColor: on? "green" : "white",
        border: "1px solid black",
        cursor: "pointer"
    };
    const offStyle = {
        display: "inline-block",
        width:"30px",
        height:"30px",
        backgroundColor: on? "white" : "red",
        border: "1px solid black",
        cursor: "pointer"
    };

    const indicatorStyle = {
        display: "inline-block",
        width:"15px",
        height:"15px",
        backgroundColor: on? "green" : "red",
        borderRadius: "10px",
        border: "1px solid black"
    };


    return (
        <div>
            <div onClick={()=>setOn(true)} style={onStyle} >On</div>
            <div onClick={()=>setOn(false)} style={offStyle} >Off</div>
            <span style={indicatorStyle} ></span>
        </div>
    );
};

export default UncontrolledOneOff;