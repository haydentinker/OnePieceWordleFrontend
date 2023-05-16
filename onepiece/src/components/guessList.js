import React from 'react'
import Guess from './guess'

export default function GuessList({ guesses }) {
    console.log(guesses)
    return (
        guesses.map((guess, index) => {
            return <Guess key={index} guess={guess} />
        })


    )
}
