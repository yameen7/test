const greet = ({name,style})=>{
    return <h1 style={style}>{name}</h1>
}

const Hoc = (Basic)=>{
    return function Enhance(){
        const div = {color:'green'};
        return(
            <Basic style={div} name='Hello'/>
        )
    }
}
export const Myhoc = Hoc(greet);