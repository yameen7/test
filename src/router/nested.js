import {

    Routes,

    Route,

    Link,

    useParams,
    BrowserRouter as Router

} from "react-router-dom";

import './nsted.css';

function Home() {

    return <h3>Home Page</h3>;

}

function WidgetDemo() {

    return (

        <div className="row">

            <div className="sidebar">

                Sidebar


                <div className="main">

                    <div className="navbar">

                        <Link to='/widget/map'>Map</Link>

                        <Link to='/widget/chart'>Chart</Link>

                        <Link to='/widget/table'>Table</Link>

                    </div>
                </div>

                <Routes>

                    <Route path='/' element={<h3>Please select a widget.</h3>} />

                    <Route path='/:widgetName' element={<Widget />}></Route>

                </Routes>

            </div>

        </div>

    )

}

function Widget() {

    let { widgetName } = useParams();

    console.log("Widgetname is", widgetName)

    return (

        <div>

            <h3>Widget: {widgetName}</h3>

        </div>

    );

}

export const Nested = () => {

    return (

        <div className="Dashboard">

            <Router>
                <div className="navbar">

                    <Link to="/">Home</Link>

                    <Link to="/widget">WidgetDemo</Link>

                </div>

                <Routes>

                    <Route path="/" element={<Home />}>

                    </Route>

                    <Route path="/widget" element={<WidgetDemo />}>

                        <Route path=":widgetName" element={<WidgetDemo />} />

                    </Route>

                </Routes>
            </Router>

        </div >

    );

}