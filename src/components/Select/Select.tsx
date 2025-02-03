

type ItemsType = {
    title: string,
    id: number,
}
type SelectPropsType = {
    value: any,
    onChange?: (value: any) => void,
    items: Array<ItemsType>,
}
const Select = (SelectPropsType) => {
    return (
        <div>
            <div>{}</div>
            {props.items.map(item => <li>{item.title}</li>)}
        </div>
    );
};

export default Select;