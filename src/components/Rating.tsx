
type StarPropsType = {
    selected: boolean
}


export function Rating() {
    return (
        <div>
            <Star selected = {true}/>
            <Star selected = {true} />
            <Star selected = {true} />
            <Star selected = {true} />
            <Star selected = {false} />
        </div>
    )
}

function Star(props:StarPropsType){
    return (
        <>
            {props.selected ? <span><b>star</b></span> : <span>star</span>}
        </>

    )
}