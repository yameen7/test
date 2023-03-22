import React, { createRef } from "react";

export default class Formref extends React.Component{
    constructor(props){
        super(props);
        this.state={msg:''};
        this.username = createRef();
        this.password = createRef();
    }

    validate(e){
        e.preventDefault();
        if (this.username.current.value === 'abc' && this.password.current.value === '123') {
            this.setState({msg:'Welcome'});
        }
        if (this.username.current.value !== 'abc' && this.password.current.value === '123') {
            this.setState({msg:'Incorrect username'});
        }
        if (this.username.current.value === 'abc' && this.password.current.value !== '123') {
            this.setState({msg:'Incorrect Password'});
        }
        if (this.username.current.value !== 'abc' && this.password.current.value !== '123') {
            this.setState({msg:'Incorrect Username and Password'});
        }

    }

    render(){
        return(
            <>
            <h1>Formref Component without CSS</h1>
            <form onSubmit={this.validate.bind(this)}>
                <input type={'text'} placeholder='Username' ref={this.username} /><br />
                <input type={'password'} placeholder='Password' ref={this.password} /><br />
                <input type={'submit'} value={'Login'} />
            </form>
            <h3 style={{color:'red'}}>{this.state.msg}</h3>
        </>
        )
    }
}