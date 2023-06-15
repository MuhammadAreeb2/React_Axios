import { React, useEffect, useState } from 'react';
import axios from "axios";

function MatchDetail() {
    const [matchDetails, setmatchDetail] = useState([])
    useEffect(() => {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://rest.entitysport.com/v2/matches/49689/info?token=ec471071441bb2ac538a0ff901abd249',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data['response']);
                // console.log
                setmatchDetail([response.data.response])
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    return (
        <>
            <h1>Match Details</h1>


            {matchDetails.length == 0 ?
                <b>loading....</b>
                :

                <h2>
                    {matchDetails[0].title}
                </h2>
            }
            {/* } */}
            {/* {
                matchDetails.map((v, i) => {
                    console.log(v.title)
                    return (
                        <h4 key={i}>{v.title}</h4>)
                })} */}


        </>
    )
}

export default MatchDetail