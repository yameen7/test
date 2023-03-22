import React, { useState } from "react";
import { useForm } from "react-hook-form"

// export const Formmsg = ()=>{
//     const {register,handleSubmit} = useForm();
//     const [msg,setmsg] = useState('No message')

//     const show = ({fname})=>{
//         setmsg(fname);
//     }

//     return(
//         <div>
//             <form onSubmit={handleSubmit(show)}>
//             <input type={'text'} placeholder='Name' {...register('fname',{required : 'This is Required'})} />
//             <input type={'submit'} value='submit'/>
//             </form>
//             <p>Message is: {msg}</p>
//         </div>
//     );
// }

export default class Formmsg extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {msg:'No Msg',val:''}
        this.hadcng=this.hadcng.bind(this);
    }
    show(e){
        e.preventDefault();
        this.setState({msg:this.state.val});
    }
    hadcng(e)
    {
        this.setState({val:e.target.value})
    }
    render(){
        return(
            <div>
             <form onSubmit={this.show.bind(this)}>
             <input type={'text'} placeholder='Name' value={this.state.val} onChange={this.hadcng} />
             <input type={'submit'} value='submit'/>
             </form>
             <p>Message is: {this.state.msg}</p>
         </div>
        )
    }
}