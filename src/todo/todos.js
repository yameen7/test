import { useState } from "react";
import './todo.css'
// import { useForm } from "react-hook-form"

export const Todos = () => {
    // let val = [];
    const [msg, setmsg] = useState('');
    const [todo, updtodo] = useState([]);

    const add = (e) => {
        e.preventDefault();
        // console.log('msg:',msg);
        updtodo([...todo, { id: todo.length + 1, title: msg }])
        setmsg('')
    }
    // console.log(todo);
    const cng = (e) => {
        // console.log(e.target.value)
        setmsg(e.target.value);
    }
    const remove = (id) => {
        const list = todo.filter(item => item.id !== id);
        updtodo(list);
    }

    return (
        <>
            <h1>Todo List</h1>
            <div className="container">
                <form>
                    <input type={'Text'} value={msg} onChange={cng} />
                    <input type={'submit'} onClick={add} />
                </form>
                <div>
                    <table>
                        <tbody>
                            {todo.map((val, ind) => (
                                // console.log(val)
                                <Trow key={ind} val={val.title} id={val.id} rmv={remove} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

const Trow = ({ val, id, rmv }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{val}</td>
            <td><button onClick={() => rmv(id)}>Remove</button></td>
        </tr>
    )
}