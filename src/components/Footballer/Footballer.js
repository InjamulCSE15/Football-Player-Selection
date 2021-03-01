import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Footballer.css';
const Footballer = (props) => {
    const { name, image, position, age, nationality, signed_from, transfer_fee } = props.player;
    return (
        <div className="player">
            <div className="picture">
                <img src={image} alt="" srcset="" />
                <br />
                <button id="add-Transfer"><FontAwesomeIcon icon={faUserPlus} />  Add to Transfer</button>
            </div>
            <div className="Info">
                <h3>{name}</h3>
                <p><b>Position:</b> {position}
                    <br />
                    <b>Age: </b> {age}
                    <br />
                    <b>Nationality: </b> {nationality}
                    <br />
                    <b>Signed From: </b> {signed_from}
                    <br />
                    <b>Transfer Fee: </b>€ {transfer_fee} million
                <br />
                </p>

            </div>
        </div>
    );
};

export default Footballer;