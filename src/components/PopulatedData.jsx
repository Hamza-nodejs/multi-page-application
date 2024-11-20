import React, { useEffect, useState } from "react";
import apiHelper from "../api/apiHelper";

function PopulationData() {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPopulation = async () => {
            try {
                const result = await apiHelper({
                    endpoint: "/data",
                    method: "GET",
                    params: {
                        // drilldowns: "Nation",
                        measures: "Population",
                    },
                });
                setData(result.data);
            } catch (err) {
                setError(err.message || "Error fetching population data");
            }
        };

        fetchPopulation();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Population Data</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.Year}>
                        {item.Year}: {item.Population.toLocaleString()} people
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PopulationData;
