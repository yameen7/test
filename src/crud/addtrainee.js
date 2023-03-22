import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate} from "react-router-dom";
import '../comp/form.css'

export const Addtrainee = () => {
    const { register, handleSubmit } = useForm();
    const navigate =useNavigate()
    const add = async(data) => {
        await axios.post('http://localhost:5000/trainees',{id:data.id,name:data.name,degree:data.degree});
        navigate('/trainee');
    }
    return (
        <div>
            <h1>Add Trainee</h1>
            <form onSubmit={handleSubmit(add)}>
                <input type={'number'} placeholder='ID' {...register('id', { required: 'This Field is Required' })} /><br />
                <input type={'text'}  placeholder='Name' {...register('name', { required: 'This Field is Required' })} /><br />
                <input type={'text'} placeholder='Degree' {...register('degree', { required: 'This Field is Required' })} /><br />
                <input type={'submit'} value={'Add'} />
            </form>
        </div>
    )
}