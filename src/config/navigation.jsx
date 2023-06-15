import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Navigation() {
    let [matchlist, setmatchlist] = useState([])
    useEffect(() => {
        // const axios = require('axios'); this is for nodejs 

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://rest.entitysport.com/v2/matches/?status=2&token=ec471071441bb2ac538a0ff901abd249',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                // console.log(response.data['response']['items'])

                console.log(response.data['response']['items'][0])
                setmatchlist(response.data['response']['items'])

                // console.log(JSON.parse(response.data)['response']);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])
    return (
        <>
            <h1>ApI'</h1>
            {
                matchlist.map((v, index) => {
                    return (
                        <div>
                            <Link to={`/matchDetail/${v.match_id}`}>
                                <h3 key={index} style={{ display: "inline-block", padding: "0px 10px" }}>
                                    {v.match_id}
                                </h3>
                                <h4 style={{ display: "inline-block", padding: "0px 10px" }}>
                                    {v.title}
                                </h4>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}