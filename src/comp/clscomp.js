import React from "react";
let cnd = true;
export default class Clscomp extends React.Component {
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        cnd=!cnd;
        console.log(cnd);
    }
    render() {
        
        return (
            <div>
                <button onClick={this.handleClick}>click</button>
                <h1>Class Component</h1>
                {cnd && <h1>Class Component with condition</h1>}
            </div>
        );
    }
}