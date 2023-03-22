import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const Home = ()=>{
    return(
        <div>
            <h1>Home Component</h1>
            <Link to={'/about'}>About</Link>
        </div>
    )
}

const About = ()=>{
    return(
        <div>
            <h1>About Component</h1>
            <Link to={'/'}>Home</Link>
        </div>
    )
}
const Pagenotfound = ()=>{
    return(
        <div>
            <h1 style={{color:'red'}}>Page Not Found</h1>
            <Link to={'/'}>Home</Link>
        </div>
    )
}
export const Basic = ()=>{
    return(
        <Router>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Routes>
                <Route path="*" element={<Pagenotfound/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </Router>
    )
}