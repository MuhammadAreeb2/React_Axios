import { useEffect, useState } from "react"
import axios from "axios";
function Soccer() {
    const [soccerApi, setSoccerApi] = useState([])
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://soccer.entitysport.com/season/2018/competitions?token=44689d60663efa7ad59e4903675b794e',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data['response']['items']);
                setSoccerApi(response.data['response']['items'])
            })
            .catch((error) => {
                console.log(error);
            });

    })

    return (
        <>
            <div className="soccermain">
                <h1 className="headingcid">CID</h1>

                <h1 className="headingcname">CNAME</h1>

                <h1 className="headingcat">CATEGORY</h1>

                {
                    soccerApi.map((v, index) => {
                        return (
                            <div key={index} className="main">
                                <div className="cid">

                                    {v.cid}
                                </div>
                                <hr />

                                <div className="cname">
                                    {v.cname}
                                </div>

                                <hr />
                                <div className="category">
                                    {v.category}
                                </div>
                                <hr />

                            </div>

                        )
                    })

                }

            </div>
        </>
    )
}
export default Soccer