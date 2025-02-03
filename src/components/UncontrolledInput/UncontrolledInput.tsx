import {ChangeEvent, useState} from "react";


const UncontrolledInput = () => {
    const [inputValue, setInputValue] = useState("")
    const onChange =(event:ChangeEvent<HTMLInputElement>) => setInputValue(event.currentTarget.value)
    return (
        <div>
            <input placeholder={"Введите текст"} value={inputValue} onChange={onChange} type="text" name="" id=""/>
        </div>
    );
};

export default UncontrolledInput;