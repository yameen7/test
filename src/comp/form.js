import React from "react";

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state ={fname:'',dep:''};
        this.handelchange = this.handelchange.bind(this);
    }

    handelchange(event){
        console.log(event.target);
        console.log(event.target.name);
        this.setState({[event.target.name]:event.target.value})
    }

    frmsubmit(event){
        console.log(this.state.name);
        alert('Name: '+this.state.fname+' Department: '+this.state.dep);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.frmsubmit.bind(this)}>
                <input type='text' name="fname" value={this.state.name} placeholder='Name' onChange={this.handelchange}/><br/>
                <input type='text' name="dep" value={this.state.dep} placeholder='Department' onChange={this.handelchange}/>
                <input type='submit' value='submit'/>
            </form>
        )
    }
}