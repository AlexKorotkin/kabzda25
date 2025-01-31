import {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed?: boolean
}
type AccordionTitlePropsType = {
    title: string
    collapsed?: boolean,
    setCollapsed: (collapsed:boolean) => void
}

export function UncontrolledAccordion(props:AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <AccordionTitle title= {props.titleValue} collapsed={collapsed}  setCollapsed={setCollapsed} />
            {!collapsed && <AccordionBody/>}
        </>
    )
}

function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>props.setCollapsed(!props.collapsed)}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}