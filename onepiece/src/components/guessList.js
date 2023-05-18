import React from 'react'
import Guess from './guess'
import '../css/App.css';

export default function GuessList({ guesses }) {
    console.log(guesses)
    return (
        guesses.map((guess, index) => {
            return <div className='card' key={index}><Guess key={index} guess={guess} /><Guess key={index} guess={guess} /><Guess key={index} guess={guess} /></div>
        })


    )
}
