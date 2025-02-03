
type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    setAccordionCollapsed:(value: boolean)=>void
    items: ItemsType[]
}
 export type ItemsType = {
    title: string,
    id: number,
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
            {!props.collapsed && <AccordionBody items={props.items}/>}
        </>
    )
}

function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h3 onClick={()=> props.onClick(!props.collapsed)}>{props.title}</h3>
    )
}
type AccordionBodyPropsType = {
    items:ItemsType[]
}
function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map(i=>{
                return <li key={i.id}>{i.title}</li>}
        )}
        </ul>
    )
}