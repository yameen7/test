import { useState } from "react"

export const Funcstat = ()=>{
    let [count,setcount] = useState(999);

    const incr = ()=>{
        setcount(++count);
    }
    const decr = ()=>{
        setcount(--count);
    }
    return (
        <div>
          <h1>Counter:&nbsp;&nbsp;{count}</h1>
          <button onClick={incr}>Increment</button>
          <button onClick={decr}>Decrement</button><br />
        </div>
      )
}