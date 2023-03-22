import { useState, useEffect } from "react";

// export function Effcfun(){
//     const [count, setCount] = useState(0);
//     console.log(count)
//     let c = 0;

//     useEffect(() => {
//         console.log(count,'in effect');
//         document.title = `You clicked ${c} times`;
//     }, [c]);

//     return(
//         <div>
//             {console.log(count,'in render')}
//             <p>You clicked {count} times</p>
//             <button onClick={()=>setCount(count+1)}>Click</button><br/>
//             <button onClick={()=>c++}>Click</button>
//         </div>
//     )
// }

export function Effcfun(){
    const [count, setCount] = useState(0);
    const [cont,setCont] = useState(1);

    useEffect(() => {
        console.log(count,'in effect');
        document.title = `count1: ${count} count2: ${cont}`;
    });

    // useEffect(() => {
    //     console.log(count,'in effect');
    //     document.title = `count1: ${count} count2: ${cont}`;
    // }, [count]);

    return(
        <div>
            {console.log(count,'in render')}
            <p>count1: {count} count2: {cont}</p>
            <button onClick={()=>setCount(count+1)}>Count1</button><br/>
            <button onClick={()=>setCont(cont*2)}>Count2</button>
        </div>
    )
}