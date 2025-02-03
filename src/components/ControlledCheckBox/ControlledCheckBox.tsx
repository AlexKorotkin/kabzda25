import {ChangeEvent} from "react";
type CheckBoxProps = {
    checked: boolean,
    setChecked: (value: boolean) => void
}

const ControlledCheckBox = (props:CheckBoxProps) => {

    const onChange =
        (event: ChangeEvent<HTMLInputElement>) => props.setChecked(event.currentTarget.checked)

    return (
        <div>

            <input placeholder={"Введите текст"} checked={props.checked} onChange={onChange}
                   type="checkbox"/>
        </div>
    );
};

export default ControlledCheckBox;