import { useEffect, useState } from "react";
import Card from "./Card";

function Upcoming() {
    const [data, setData] = useState('');

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://api.spacexdata.com/v3/launches/upcoming');
            const res = await response.json();
            setData(res[0]);
        }
        getData();
    }, []);

    return (
        <>
            
            <div className="flex justify-around">
                <Card rocket={data} history="Upcoming"/>
            </div>
        </>
    );
}

export default Upcoming;