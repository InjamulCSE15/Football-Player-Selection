import React from 'react';

const Transferlist = (props) => {
    const addPlayer = props.addPlayer;

    const total = addPlayer.reduce ((total, performer) => total + performer.transfer_fee, 0)

    return (
        <div>
            <h2>Transfer Summary:</h2>
            <h3>Player added: {addPlayer.length}</h3>
            <h4>Buying Cost(Total): € {total} million</h4>
        </div>
    );
};

export default Transferlist;