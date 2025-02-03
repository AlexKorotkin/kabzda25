import {ChangeEvent} from "react";

type ControlledSelectProps = {
    selected: string | undefined;
    setSelected: (selected: string) => void;

}

const ControlledSelect = (props:ControlledSelectProps) => {

    const onChange =
        (event: ChangeEvent<HTMLSelectElement>) => props.setSelected(event.currentTarget.value)

    return (
        <select value={props.selected} onChange={onChange}>
            <option >Месяц</option>
            <option value="1">Январь</option>
            <option value="2">Февраль</option>
            <option value="3">Март</option>
            <option value="4">Апрель</option>
        </select>
    );
};

export default ControlledSelect;