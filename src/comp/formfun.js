import { useForm } from "react-hook-form"

export const Formfun = () =>{
    const {register,handleSubmit} = useForm();

    const onSubmit = (data)=>{
        const {fname,mail,mob} = data;
        console.log(fname,mail,mob);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type={'text'} placeholder='Name' {...register('fname',{required : 'This is Required'})} />
            <input type={'email'} placeholder='Email' {...register('mail')} />
            <input type={'number'} placeholder='Number' {...register('mob',{valueAsNumber:true})} />
            <input type={'submit'} value='submit'/>
        </form>
    )
}