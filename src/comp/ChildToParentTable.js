import { useState } from 'react'

export const ChildToParentTable = () => {
    const employees = [
        {
            id: 1,
            name: 'amit',
            desg: 'trainee'
        },
        {
            id: 2,
            name: 'ami',
            desg: 'developer'
        }]
    const [empList, setEmplist] = useState(employees)
    const removeEmp = (id) => {
        const list = empList.filter(item => item.id !== id);
        setEmplist(list);
    }
    return (
        <div>
            <Employee details={empList} removeEmp={removeEmp} />
        </div>
    )

}

const Employee = props => {
    const details = props.details;// an array of objects of trainees
    return (
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>remove</th>
                </tr>
                {details.map((detail, index) => (
                    <EmployeeDetails detail={detail} removeEmp={props.removeEmp} key={index} />
                ))}
            </table>
        </div>
    );
};

const EmployeeDetails = props => {

    console.log('Props in empdetails', props)
    const { name, desg, id } = props.detail;// single object of trainee
    return (
        <tr key={id}>
            <td> {name}</td>
            <td> {desg}</td>
            <td> <button onClick={() => props.removeEmp(id)}>Remove from the
                list</button></td>
        </tr >
    );
};