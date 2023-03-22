import React from "react";

export default class Statecomp extends React.Component{
    constructor(props){
        super(props);
        this.flag = true;
        this.state={msg:true};
        console.log(this.state);
    }
    toggleFlag() {
        console.log('Flag Before:', this.flag);
        this.flag = !this.flag;
        console.log('Flag after:', this.flag);
    }
    toggleMsg() {
        console.log('msg Before:', this.state.msg);
        this.setState({ msg: !this.state.msg})
        console.log('msg After:', this.state.msg);
    }
    showmsg()
    {
        return(<div><h1>I am togle message</h1></div>)
    }
    render() {

        return (
          <div>
            <button onClick={this.toggleMsg.bind(this)}>Toggle Msg</button><br />
            showmsg {this.state.msg.toString()} showmsg says:{this.state.msg ? this.showmsg() : null}<br />
            <button onClick={this.toggleFlag.bind(this)}>Toggle Flag</button><br />
            flag {this.flag.toString()} says:{this.flag && this.showmsg()}
          </div>
        )
      }
}