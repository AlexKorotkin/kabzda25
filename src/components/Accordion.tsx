type AccordionPropsType = {
    titleValue: string,
    collapsed?: boolean
}
type AccordionTitlePropsType = {
    title: string
}

export function Accordion(props:AccordionPropsType) {
    return (
        <>
            <AccordionTitle title= {props.titleValue} />
            {!props.collapsed && <AccordionBody/>}
        </>
    )
}

function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
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