import React from "react";

export default class Unmountmsg extends React.Component{
    constructor(props){
        super(props);
        console.log('Constructor from unmountmsg');
    }
    componentDidMount(){
        console.log('Did mount from unmountmsg');
    }
    componentDidUpdate(){
        console.log('Did Update from unmountmsg');
    }
    shouldComponentUpdate(){
        console.log('Should Update from unmountmsg');
        return true;
    }
    render(){
        return(
            <div>
                <p>{this.props.msg}</p>
                <button onClick={()=>{this.props.remove(this.props.id)}}>Remove</button>
            </div>
        )
    }
    componentWillUnmount(){
        console.log('Will unmount from unmountmsg');
        console.log('Item removed:',this.props.msg);
    }
}