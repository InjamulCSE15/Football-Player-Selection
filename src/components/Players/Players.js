import React from 'react';
import fakeData from '../../fakeData/data.json';
import {useState} from 'react';
import './Players.css'
import Footballer from '../Footballer/Footballer';
import Transferlist from '../Transferlist/Transferlist';
const Players = () => {

    const elevenPlayer = fakeData.slice(0,15);
    const [players, setPlayers] = useState(elevenPlayer);

    const [addPlayer, setPlayer] = useState([]);
    
    const handleAddPlayer = (player) => {
        
        const newPlayer = [...addPlayer, player];
        setPlayer(newPlayer);

    }

    return (
        <div className="squad-container">
            <div className="players-container">
                {
                    players.map(footballPlayer => <Footballer 
                        handleAddPlayer = {handleAddPlayer}
                        player = {footballPlayer}></Footballer>)
                }
            </div>
            <div className="transfer">
                <Transferlist addPlayer={addPlayer}></Transferlist>
            </div>
        </div>
    );
};

export default Players;