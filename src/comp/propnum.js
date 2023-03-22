function Listiten(props){
    return <li>{props.value}</li>
}

export function Numberlis(props){
    const n = props.numbers;
    const li = n.map((num)=><Listiten key={num.toString()} value={num}/>);

    return(<ul>{li}</ul>);
}