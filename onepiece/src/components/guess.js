import React from 'react'
import '../css/App.css';
import luffy from '../images/luffy.png'
export default function Guess({ guess }) {
    const mockApicall = { "name": "yes", "anime_debut": 450, "affiliations": "Pirates", "occupations": "yes", "birthday": "Jan 10" }
    // const imageUrl = mockApicall.img_url;
    // delete mockApicall.img_url;
    return (
        <>
            <img src={luffy} alt={mockApicall.name} className='character_image cardbox' />
            {Object.values(mockApicall).map((value, index) => (
                <div className='cardbox' key={index}>{value} </div>
            ))}
        </>
    );
};

