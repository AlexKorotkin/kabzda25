
type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    setAccordionCollapsed:(value: boolean)=>void
}
type AccordionTitlePropsType = {
    title: string,
    collapsed: boolean,
    onClick:(value: boolean) => void
}

export function Accordion(props:AccordionPropsType) {
    return (
        <>
            <AccordionTitle title= {props.titleValue}
                            onClick={props.setAccordionCollapsed}
                            collapsed={props.collapsed}
            />
            {!props.collapsed && <AccordionBody/>}
        </>
    )
}

function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h3 onClick={()=> props.onClick(!props.collapsed)}>{props.title}</h3>
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