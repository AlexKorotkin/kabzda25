import {ChangeEvent} from "react";

type InputProps = {
    inputValue: string,
    setInputValue: (value: string) => void
}

export const ControlledInput = ({inputValue,setInputValue}:InputProps) => {

    const onChange =
        (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.currentTarget.value)

    return (
        <div>

                <input placeholder={"Введите текст"} value={inputValue} onChange={onChange}
                       type="text"/>
        </div>
    );
};

export default ControlledInput;