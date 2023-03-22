import { useState } from "react";

import { Displayfe } from "./Displayfe";

import Displaymemo from "./displaymemo";

export const Purecomp = () => {

    const frontends = ['react', 'angular', 'vue'];

    const [frontendName, setFrontEndName] = useState('');

    const [searchedFrontend, setSearchFrontEnd] = useState('search your favorite frontend')

    const [count, setCount] = useState(0);

    const searchFrontendName = () => {

        if (frontends.includes(frontendName)) {

            setSearchFrontEnd(frontendName)

        }

        else {

            setSearchFrontEnd('No fornt End is Selected');

        }

        setCount(count + 1)

    }

    const showAllFrontends = () => {

        return frontends.map((fe, index) => {

            return (

                <span key={index}>{fe}</span>

            )

        })

    }

    return (

        <div>

            <h2> Count : {count}</h2>

            {showAllFrontends()}

            <div>

                <input type="text" placeholder="Enter Frontend Name"

                    onChange={e => setFrontEndName(e.target.value)}

                    value={frontendName} />

                <button type="button" onClick={searchFrontendName}>Search</button>

            </div>

            <Displayfe searchedFrontend={searchedFrontend} />

            <Displaymemo searchedFrontend={searchedFrontend} />

        </div>

    )

}

