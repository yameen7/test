export const Compsplit = () => {
    const employee = [
        { id: 1, name: 'Demo', dep: 'IT' },
        { id: 2, name: 'Test', dep: 'Network' }
    ];

    return (
        <Employee detail={employee} />
    );
}

const Employee = ({ detail }) => {
    return (
        <div>
            <ul>
                {detail.map((det,ind) => (
                    <Employeedet key={ind} det={det} />
                ))}
            </ul>
        </div>
    );
}

const Employeedet = ({det})=>{
    return(
        <li>
            Name: {det.name}<br/>
            Department: {det.dep}
        </li>
    );
}