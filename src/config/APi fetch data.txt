import { useEffect } from "react"
import axios from "axios";

export default function ODI() {
    const [rank, setrank] = useEffect([])
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://rest.entitysport.com/v2/iccranks?token=ec471071441bb2ac538a0ff901abd249',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data['response']);
                // setrank(response.data['response']['ranks'])
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])
    return (

        <>
            <div>

                heelo

            </div>
        </>
    )
}