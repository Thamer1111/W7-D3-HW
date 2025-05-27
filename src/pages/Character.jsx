import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

export default function Character() {
    const [character, setCharacter] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://655127797d203ab6626e943b.mockapi.io/Character_fahad`)
            .then(response => response.json())
            .then(data => {
                const found = data.find(c => c.id == id)
                setCharacter(found)
            })
            .catch(err => console.error("Fetch error:", err))
    }, [id])

    if (!character) {
        return <p className="text-xl text-center p-10">Loading or character not found...</p>
    }

    return (
        <div className='bg-gray-200 h-screen'>
            <div className='rounded-lg shadow bg-white text-xl w-lvw h-max sm:w-sm md:w-md lg:w-lg mx-auto py-5 px-10'>
                <img src={character.image} className="w-80 h-80  rounded-lg mb-4 mx-auto" />
                <p>name: {character.name}</p>
                <p>hair: {character.hair}</p>
                <p>status: {character.status}</p>
                <p>species: {character.species}</p>
                <p>gender: {character.gender}</p>
                <p>origin: {character.origin}</p>

                <Link to="/"><button className='rounded-md border-2 bg-gray-400 p-2 mt-2'>back to Characters List</button></Link>
            </div>
        </div>
    )
}
