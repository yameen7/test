import { useEffect, useState } from "react"

export const Cleanup = ()=>{
    let [flag,setflag] = useState(false);

    useEffect(()=>{
        console.log('Effect called');

        let interval = setInterval(()=>console.log('Iam Interval'),1000)
        setTimeout(()=>setflag(true),2000)

        return()=>{
            console.log('Clean up is called');
            clearInterval(interval);
        }
    },[flag]);

    return(
        <div>
            Flag is {flag.toString()}<br/>
            <button onClick={()=>setflag(!flag)}>Toggle</button>
        </div>
    )
}