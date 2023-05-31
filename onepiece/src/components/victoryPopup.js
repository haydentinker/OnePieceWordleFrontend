import React from 'react';
import '../css/victoryPopup.css';

const VictoryPopup = ({ onClose }) => {
    return (
        <div className="victory-popup">
            <h2>Congratulations!</h2>
            <p>You guessed the character correctly!</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default VictoryPopup;
