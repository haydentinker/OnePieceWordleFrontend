import React from 'react'
import '../css/App.css';
export default function Guess({ guess }) {
    const mockApicall = { "name": "Luffy", "anime_debut": 450, "affiliations": "Pirates", "occupations": "yes", "birthday": "Jan 10", "img_url": "https://static.wikia.nocookie.net/onepiece/images/3/31/Aphelandra_Anime_Infobox.png/" }
    const imageUrl = mockApicall.img_url;
    delete mockApicall.img_url;
    return (
        <>
            <img src={imageUrl} alt={mockApicall.name} className='character_image' />
            {Object.values(mockApicall).map((value, index) => (
                <div className='cardbox' key={index}>{value} </div>
            ))}
        </>
    );
};

