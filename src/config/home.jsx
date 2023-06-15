import { Link } from "react-router-dom"
import { Button } from "@mui/material"
export default function Home() {
    return (
        <>
            <Link to={'/navigation'}>

                <Button variant="outlined">    Matches and Match Details</Button>
            </Link>

            <Link to={'/odi'}>
                <Button variant="outlined">
                    ODI's

                </Button>
            </Link>
        </>
    )
}