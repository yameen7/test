import { ErrorMessage } from "@hookform/error-message/dist";
import { useState } from "react";
import { useForm } from "react-hook-form"
import './form.css'
// const title ={
//     color:'red'
// }
export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [msg, setmsg] = useState('');
    // const [er,seter] = useState(true);
    const validate = (data) => {
        if (data.username === 'abc' && data.password === '123') {
            setmsg('Welcome');
        }
        if (data.username !== 'abc' && data.password === '123') {
            setmsg('Incorrect username');
        }
        if (data.username === 'abc' && data.password !== '123') {
            setmsg('Incorrect Password');
        }
        if (data.username !== 'abc' && data.password !== '123') {
            setmsg('Incorrect Username and Password');
        }

    }

    return (
        <div>
            <h1>Login Component with CSS</h1>
            <form onSubmit={handleSubmit(validate)}>
                <input type={'text'} placeholder='Username' {...register('username', { required: 'This Field is Required' })} /><br />
                <ErrorMessage errors={errors} name='username' render={({ message }) => <p>{message}</p>} />
                <input type={'password'} placeholder='Password' {...register('password', { required: 'This Field is Required' })} /><br />
                <ErrorMessage errors={errors} name='password' render={({ message }) => <p>{message}</p>} />
                <input type={'submit'} value={'Login'} />
            </form>
            <h3>{msg}</h3>
        </div>
    )
}