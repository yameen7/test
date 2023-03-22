import { useEffect, useState } from "react";
import { Trainedetail } from "./trainedetail";
import axios from "axios"
import './table.css'
import { Link } from "react-router-dom";

export const Traineelist = () => {
    const [trainee, settrainee] = useState([]);
    const fetchData = async () => {
        let { data } = await axios.get('http://localhost:5000/trainees');
        settrainee(data);

    }


    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>

            <Link to='/trainee/create'><button className="add">Add New Trainee</button></Link>
            <div className="table">
                {(trainee.length > 0) ?
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Degree</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trainee.map((detail) => (
                                <Trainedetail tdata={detail} key={detail.id} />
                            ))}
                        </tbody>
                    </table> :
                    <div>No data Founs</div>}
            </div>

        </div>
    )
}