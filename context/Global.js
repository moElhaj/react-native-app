import React, { createContext, useEffect, useState } from "react";
import { Loader } from "../components/Shared";


export const Global = createContext();

export default ({ children }) => {

    const [matches, setMatches] = useState([]);
    const [standings, setStandings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getData = async () => {
        let d = new Date();
        let year = d.getFullYear();
        
        const matchesResponse = await fetch(`https://api.football-data.org/v2/competitions/${year}/matches?status=SCHEDULED`, {
            headers: {
                'X-Auth-Token': 'API key'
            }
        });
        const matchesResult = await matchesResponse.json();
        setMatches(matchesResult);

        const standingsResponse = await fetch(`https://api.football-data.org/v2/competitions/${year}/standings`, {
            headers: {
                'X-Auth-Token': 'API key'
            }
        });
        const standingsResult = await standingsResponse.json();
        setStandings(standingsResult);


        setLoading(false);
    }

    return <>
        {loading ? <Loader /> : <Global.Provider value={{ matches, standings }}>
            {children}
        </Global.Provider>}
    </>;
}