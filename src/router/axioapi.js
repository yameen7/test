import axios from "axios"
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"

export const Axioapi = ()=>{
    const {register,handleSubmit} = useForm();
    const [data,setdata] = useState(null);
    const fetchData = async ()=>{
        let {data} = await axios.get('http://localhost:5000/trainees');
        setdata(JSON.stringify(data));
        
    }

    useEffect(() => {
        fetchData()
    }, []);

    const onSubmit = async (data)=>{
        
        let {status} = await axios.post('http://localhost:5000/trainees',{name:data.name,degree:data.degree});
        if(!status===200){
            alert('Data not added');
        }
        else{

            fetchData();
        }

    }

    return(
        <div>
            <h1>Data</h1>
            {data}
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type={'text'} placeholder='Name' {...register('name')} />
            <input type={'text'} placeholder='Degree' {...register('degree')} />
            <input type={'submit'} value='submit'/>
        </form>
        </div>
    )
}