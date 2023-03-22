import React from "react"
import Unmountmsg from "./unmountmsg";

export default class Unmount extends React.Component{
    constructor(props){
        super(props);
        this.del=0;
        console.log('Constructor from unmount');
        this.state ={list:[{id:1,msg:'Abc'},{id:2,msg:'Xyz'},{id:3,msg:'Pqr'}],del:''}
    }
    componentDidMount(){
        console.log('Did mount from unmount');
    }
    componentDidUpdate(){
        console.log('Did Update from unmount');
    }
    shouldComponentUpdate(){
        console.log('Should Update from unmount');
        return true;
    }
    removeid(id){
        const dlist = this.state.list.filter(item=> item.id=== id);
        this.setState({del:dlist[0]});
        const newlist = this.state.list.filter(item=> item.id!== id);
        this.setState({list:newlist});
    }
    render(){
        return(
            <div>
                <h1>Items</h1>
                {this.state.list.map(item=>(
                    <Unmountmsg key={item.id}
                    id={item.id}
                    msg={item.msg}
                    remove={this.removeid.bind(this)}
                    />
                ))}

                <p>{this.state.del.msg}</p>
            </div>
        )
    }

}