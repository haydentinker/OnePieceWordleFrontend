import React from 'react'
import '../css/App.css';


export default function Guess({ guess }) {
    const mockApicall = { "img_url": "https://static.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20200429191518", "name": "yes", "anime_debut": 450, "affiliations": "Pirates", "occupations": "yes", "birthday": "Jan 10" }
    const imageUrl = mockApicall.img_url;
    delete mockApicall.img_url;
    return (
        <>
            <img src={imageUrl} alt={mockApicall.name} />
            {Object.values(mockApicall).map((value, index) => (
                <div key={index}>{value}</div>
            ))}
        </>
    );
};

