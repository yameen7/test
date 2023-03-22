import { useState } from "react"

export const Tglfun = ()=>{
    let [msg,setmsg]=useState(true);
    let flag = true;
    return(
        <div>
            <button onClick={()=>setmsg(!msg)}>Toggle</button><br/><br/>
            msg: {msg && <h1>I am togle message</h1>}
            <button onClick={()=>flag=!flag}>Toggle Flag</button><br/><br/>
            msg: {flag && <h1>I am togle message</h1>}
        </div>
    );
} 