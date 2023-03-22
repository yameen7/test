import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom";
import '../comp/form.css'

export const Addtrainee = () => {
    const p_id = useParams().id;
    let name,degree='';
    let id=0;
    

    // console.log(p_id);
    async function fetch(){
        const {data} = await axios.get(`http://localhost:5000/trainees/${p_id}`);
        name=data.name;
        id=data.id;
        degree=data.degree;
    }
    const { register, handleSubmit } = useForm();
    const navigate =useNavigate()
    const add = async(data) => {
        if(p_id)
        {
            await axios.put(`http://localhost:5000/trainees/${p_id}`,{id:data.id,name:data.name,degree:data.degree});
        }
        else{

            await axios.post('http://localhost:5000/trainees',{id:data.id,name:data.name,degree:data.degree});
        }
        // navigate('/trainee');
    }
    return (
        <div>
            <h1>Add Trainee</h1>
            <form onSubmit={handleSubmit(add)}>
                <input type={'number'}  placeholder='ID' {...register('id', { required: 'This Field is Required' })} /><br />
                <input type={'text'}  placeholder='Name' {...register('name', { required: 'This Field is Required' })} /><br />
                <input type={'text'} placeholder='Degree' {...register('degree', { required: 'This Field is Required' })} /><br />
                <input type={'submit'} value={'Add'} />
            </form>
        </div>
    )
}