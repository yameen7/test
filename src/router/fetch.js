import { useState,useEffect } from "react"

export const Fetch = () => {
    const [trainee, setTrainee] = useState(null);

    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/trainees');

        if (!res.ok) {
            const msg = `An Error occured: ${res.status}`;
            throw new Error(msg);
        }
        let data = await res.json();
        setTrainee(JSON.stringify(data));
    }

    useEffect(() => {
        fetchData()

    }, []);

    return (
        <div>
            <h1>Data</h1>
            {trainee}
        </div>
    )
}