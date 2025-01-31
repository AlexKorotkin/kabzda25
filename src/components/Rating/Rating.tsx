
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    ratingValue: RatingValueType,
    setRatingValue: (value: RatingValueType)=>void
}

export function Rating(props:RatingPropsType) {
    return (
        <div>
            <Star selected = {props.ratingValue>0} value = {1} onClick={props.setRatingValue} />
            <Star selected = {props.ratingValue>1} value = {2} onClick={props.setRatingValue} />
            <Star selected = {props.ratingValue>2} value = {3} onClick={props.setRatingValue} />
            <Star selected = {props.ratingValue>3} value = {4} onClick={props.setRatingValue} />
            <Star selected = {props.ratingValue>4} value = {5} onClick={props.setRatingValue} />
        </div>
    )
}

type StarPropsType = {
    selected: boolean,
    value: 1|2|3|4|5,
    onClick: (value: 1|2|3|4|5) => void
}

function Star(props:StarPropsType){
    return (
        <span onClick={() => props.onClick(props.value)}>{props.selected ? <b> star</b> : " star"}</span>
    )
}