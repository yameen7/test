import { createContext } from "react"

const Cont = createContext('Default Val');
export const Contextdemo = () => {
    const val = 'Hello and welcome';
    return (
        <Cont.Provider value={{msg:val,name:'abc'}}>
            <MyComponent />
        </Cont.Provider>
    )
}
// function MyComponent(){
//     const val = useContext(Cont)
//     return <span>{val}</span>
// }
const MyComponent = () => {
    // const val = useContext(Cont)
    return (
        <>
            {/* <span>{val}</span> */}
            <Childcomp />
        </>
    )
}

const Childcomp = () => {
    // const val = useContext(Cont)
    // return <span>{val}</span>
    return (
        <Cont.Consumer>
            {value => <span>{value.name}</span>}
        </Cont.Consumer>
    )
}