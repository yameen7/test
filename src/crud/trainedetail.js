import axios from "axios";
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export const Trainedetail = ({tdata})=>{

    const navigate = useNavigate();
    async function deleteTraineeConf(id){
        let res = await Swal.fire({
            title:'Are you sure',
            text:'Trainee will be deleted',
            icon:'warning',
            showCancelButton:true,
            confirmButtonColor:'red',
            cancelButtonColor:'green',
            confirmButtonText:'Yes',
            cancelButtonText:'No'
        });
        if(res.isConfirmed){
            deleteTrainee(id);
            await Swal.fire({
                text:'Trainee Deleted',
                title:'Deleted',
                icon:'success'
            });
            navigate("/");
            
        }
    }

    async function deleteTrainee(id){
        //console.log(`http://localhost:5000/trainees/${id}`);
        await axios.delete(`http://localhost:5000/trainees/${id}`);
        // navigate('/trainee');
    }

    return(
        <tr>
            <td>{tdata.id}</td>
            <td>{tdata.name}</td>
            <td>{tdata.degree}</td>
            <td><Link to={`/trainee/update/${tdata.id}`}><button className="update">Update</button></Link></td>
            <td><button className="delete" onClick={()=>deleteTraineeConf(tdata.id)}>Delete</button></td>
        </tr>
    )
}