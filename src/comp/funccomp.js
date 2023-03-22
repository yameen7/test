const Funccomp = () => {
    let cnd = true;
    const handleClick = () => {
        // alert(cnd)
        // cnd = false;
        cnd = !cnd
        console.log(cnd);
      }
    return (
        <div>
            <button onClick={handleClick}>click</button>
            <h1>Function Component</h1>
            {cnd && <h1>Function Component with condition</h1>}
        </div>
    )
}
export default Funccomp;