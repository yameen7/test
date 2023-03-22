import React from "react";

export default class Mount extends React.Component{
    // constructor(props)
    // {
    //     super(props);
    //     console.log('Constructor');
    // }
    componentDidMount(){
        console.log('Did mount');
    }
    render(){
        console.log('Render');
        return(
            <h1>Mounted</h1>
        )
    }
}