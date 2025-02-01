import { useEffect, useState } from "react";
import Card from "./Card";

function Previous(){
    const [data, setData] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://api.spacexdata.com/v3/launches/past');
            const res = await response.json();
            setData(res[0]);
        }
        getData();
    }, []);


    return (
        <>
            <div className="flex justify-around">
                <Card rocket={data} history={"Previous"}/>
            </div>
        </>
    )
}

export default Previous;