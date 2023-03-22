export const Ptoc = ()=>{
    const data = 'Hii child from parent';
    return(
        <div>
            <Child datafp={data}/>
        </div>
    );
}

const Child = ({datafp})=>{
    return(
        <div>
            <h1>parent : {datafp}</h1>
        </div>
    )
}