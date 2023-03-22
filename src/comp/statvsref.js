import { useRef, useState } from "react"

export const Statvsref = ()=>{
    let [cnt,setcnt] = useState(0);
    let cntref = useRef(0);
    const inc_cntr = ()=>{setcnt(++cnt)}
    const inc_cntref = ()=>{cntref.current++;}

    return(
        <>
            <h3>Counter: {cnt}</h3>
            <button onClick={inc_cntr}>Add</button>
            <h3>Reference Counter: {cntref.current}</h3>
            <button onClick={inc_cntref}>Add</button>
        </>
    )
}