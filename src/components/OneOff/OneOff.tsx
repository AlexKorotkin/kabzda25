

type OneOffPropsType ={
    on: boolean,
    setOn: (value: boolean) => void

}

const OneOff = (props:OneOffPropsType) => {

    const onStyle = {
        display: "inline-block",
        width:"30px",
        height:"30px",
        backgroundColor: props.on? "green" : "white",
        border: "1px solid black",
        cursor: "pointer"
    };
    const offStyle = {
        display: "inline-block",
        width:"30px",
        height:"30px",
        backgroundColor: props.on? "white" : "red",
        border: "1px solid black",
        cursor: "pointer"
    };

    const indicatorStyle = {
        display: "inline-block",
        width:"15px",
        height:"15px",
        backgroundColor: props.on? "green" : "red",
        borderRadius: "10px",
        border: "1px solid black"
    };


    return (
        <div>
            <div onClick={()=>props.setOn(true)} style={onStyle} >On</div>
            <div onClick={()=>props.setOn(false)} style={offStyle} >Off</div>
            <span style={indicatorStyle} ></span>
        </div>
    );
};

export default OneOff;