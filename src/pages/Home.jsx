import React from 'react'
import NavBar from "../components/NavBar"
import { v4 } from "uuid"
export default function Home() {
    const id = v4();

    return (
        <>
            <NavBar />
            <h1>
                your unique session_id:
            </h1>
            <p>
                {id}
            </p>
            <p>
                Refresh for new id
            </p>
        </>
    )
}
