import React from "react";

export default class Update extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {count:0}
        console.log('Constructor');
    }
    componentDidMount(){
        console.log('Did mount');
    }
    componentDidUpdate(){
        console.log('Did Update');
    }
    shouldComponentUpdate(){
        console.log('Should Update');
        return true;
    }
    render(){
        console.log('Render');
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>+</button>
            </div>
        )
    }
}