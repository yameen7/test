export const Tbl = () => {
    const fe = ['React', 'Angular', 'Vue','node','express'];

    return (
        <table>
            <tbody>
                {fe.map((ele, ind) => {
                    // return <tr key={ind}>
                    //     <td>{ind}</td>
                    //     <td>{ele}</td>
                    // </tr>
                    return <Rows key={ind} id={ind} val={ele}/>
                })}
            </tbody>
        </table>
    )
}

const Rows = ({id,val})=>{
    return(
        <tr>
            <td>{id}</td>
            <td>{val}</td>
        </tr>
    )

}