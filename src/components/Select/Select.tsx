import styles from "./Select.module.css";
import {useState, KeyboardEvent, useEffect} from "react";

 export type citiesType = {
    title: string,
    value: string
}
type SelectPropsType = {
    value: string,
    onChange?: (value: string) => void,
    items: Array<citiesType>
}
const Select = (props:SelectPropsType) => {
    const [active, setActive] = useState<boolean>(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);
    useEffect(() => {setHoveredElementValue(props.value)},[props.value]);

    const selectedItem = props.items.find(item => item.value === props.value);
    const hoveredItem = props.items.find(item => item.value === hoveredElementValue);
    const toggleItems =() => setActive(!active);
    const onItemClick = (value:string) => {
        props.onChange(value);
        toggleItems();
    };
    const onKeyUp = (e:KeyboardEvent<HTMLDivElement>) =>{
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i=0; i<props.items.length; i++){
                if (props.items[i].value === hoveredElementValue){
                    const pretedentElement  = e.key==='ArrowDown'
                        ? props.items[i+1]
                        :props.items[i-1];
                    if(pretedentElement){
                        props.onChange(pretedentElement.value);
                        return;
                    }
                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value);
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false);
        }
    }


    return (

        <div className={styles.select} tabIndex={0}  onKeyUp={onKeyUp}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {active &&
                <div className={styles.items}>
                    {props.items.map(item => <div className={styles.item + " " + (hoveredItem===item? styles.selected:"") }
                                                  onClick={()=>onItemClick(item.value)}
                                                  onMouseEnter={()=>setHoveredElementValue(item.value)}
                                                  key={item.value}>{item.title}</div>)}
                </div>
            }
        </div>
    );
};

export default Select;