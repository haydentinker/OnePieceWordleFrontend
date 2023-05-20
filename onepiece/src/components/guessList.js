import React from 'react'
import Guess from './guess'
import '../css/App.css';

export default function GuessList({ guesses }) {
    console.log(guesses)
    return (
        guesses.slice(0).reverse().map((guess, index) => {
            return <div className='card' key={guesses.index}><Guess key={index} guess={guess} /></div>
        })


    )
}
