import { createContext, useContext } from "react"

const context = createContext('Default');
function Child(){
    const cont = useContext(context);
    return <h2>Child1: {cont}</h2>
}

function Child2(){
    const cont = useContext(context);
    return <h2>Child2: {cont}</h2>
}
export const Contchild = ()=>{
    return(
        <>
            <context.Provider value={'Initial Value'}>
                <Child/>
            </context.Provider>
            <Child2/>
        </>
    )
}