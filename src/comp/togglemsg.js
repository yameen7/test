import React from "react";

export default class Togglemsg extends React.Component{
    constructor(props)
    {
        super(props);
        this.flag=false;
    }
    toggleflag()
    {
        console.log('Before:',this.flag);
        this.flag=!this.flag;
        console.log('After:',this.flag);
    }
    showflag()
    {
        return(<div><h1>I am togle message</h1></div>)
    }
    render(){
        return(
            <div>
                <button onClick={this.toggleflag.bind(this)}>Toggle Flag</button><br/><br/>
                msg {this.flag.toString()} says:{this.flag? this.showflag() : null}
            </div>
        );
    }
}