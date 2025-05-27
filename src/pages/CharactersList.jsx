import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

export default function CharactersList() {
    const [characters, setcharacters] = useState([])
    useEffect(() => {
        fetch('https://655127797d203ab6626e943b.mockapi.io/Character_fahad')
            .then(response => response.json())
            .then(data => setcharacters(data))
    }, [])
    return (
        <div className='bg-gray-200'>
            <h1 className='text-xl text-center font-bold'>List of characters</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 mx-3 '>
                {characters.map((itme) => {
                    return (
                        <Link to={`/${itme.id}`}>
                            <div className='rounded-lg shadow flex flex-col justify-between items-center bg-white'>

                                <img src={itme.image}  className='rounded-t-lg w-full'/>
                                <h1>{itme.name}</h1>
                            </div>
                        </Link>
                    );
                })}
            </div>

        </div>
    )

}
