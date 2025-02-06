import {useReducer} from "react";
import {ActionType, reducer, stateType, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string,
    collapsed?: boolean
}
type AccordionTitlePropsType = {
    title: string
    state?: stateType,
    dispatch: (value:ActionType) => void
}

export function UncontrolledAccordion(props:AccordionPropsType) {


    const [state, dispatch] = useReducer(reducer, {collapsed:true});


    return (
        <>
            <AccordionTitle title= {props.titleValue} state={state}  dispatch={dispatch} />
            {!state.collapsed && <AccordionBody/>}
        </>
    )
}

function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>props.dispatch({type:TOGGLE_COLLAPSED})}>{props.title}</h3>
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