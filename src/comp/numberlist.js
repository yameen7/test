export const Numberlist = ()=>{
    const numb = [1,1,3,4,5];

    const lst = numb.map((n,ind)=>
        <li key={ind}>{n}</li>
    );

    return(<ul>{lst}</ul>)
}