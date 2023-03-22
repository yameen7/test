import React from "react";

export default class Propcomp extends React.Component{
    // constructor(props)
    // {
    //     super(props);
    //     // this.props.tech='Angular';
    //     console.log(this.props);
    // }
    render(){
        return(
            <div>
                {/* <h1>prop: {toString(this.props)}</h1> */}
                <h1>prop: {this.props.tech}</h1>
            </div>
        )
    }
}