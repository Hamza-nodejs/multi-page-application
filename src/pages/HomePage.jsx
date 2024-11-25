import React from 'react'
import NavBar from '../components/NavBar'
import Cards from '../components/Cards'
import Firebase from '../components/Firebase'

export default function HomePage() {
    return (
        <>
            <NavBar />
            <Cards />
            <Firebase />
        </>
    )
}
