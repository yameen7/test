export const Childprop = ()=>{
    const data = 'Hii I am from parent';
    return(
        <div>
            <h1>Hii</h1>
            <Child pdata = {data}>
                {data}
                <h1>Hii I am children</h1>
                <h1>Hii I am children</h1>
            </Child>
        </div>
    )
}

const Child = ({pdata,children}) => {
    console.log(children.length);
    return(
        <div>
            {/* {children.length} */}
            {children.data}
            {pdata}
        </div>
    )
}