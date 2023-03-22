import { useRef, useState } from "react";

export const Formrefun = ()=>{
    const [msg, setmsg] = useState('');
    const username = useRef();
    const password = useRef();

    const validate = (e) => {
        e.preventDefault();
        if (username.current.value === 'abc' && password.current.value === '123') {
            setmsg('Welcome');
        }
        if (username.current.value !== 'abc' && password.current.value === '123') {
            setmsg('Incorrect username');
        }
        if (username.current.value === 'abc' && password.current.value !== '123') {
            setmsg('Incorrect Password');
        }
        if (username.current.value !== 'abc' && password.current.value !== '123') {
            setmsg('Incorrect Username and Password');
        }

    }

    return(
        <>
            <form onSubmit={validate}>
                <input type={'text'} placeholder='Username' ref={username} /><br />
                <input type={'password'} placeholder='Password' ref={password} /><br />
                <input type={'submit'} value={'Login'} />
            </form>
            <h3>{msg}</h3>
        </>
    )
}