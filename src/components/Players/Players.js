import React from 'react';
import fakeData from '../../fakeData/data.json';
import {useState} from 'react';
import './Players.css'
import Footballer from '../Footballer/Footballer';
const Players = () => {

    const elevenPlayer = fakeData.slice(0,15);
    const [players, setPlayers] = useState(elevenPlayer);
    
    return (
        <div className="squad-container">
            <div className="players-container">
                {
                    players.map(footballPlayer => <Footballer player = {footballPlayer}></Footballer>)
                }
            </div>
            <div className="transfer">
                <h2>Transfer Summary: </h2>
            </div>
        </div>
    );
};

export default Players;