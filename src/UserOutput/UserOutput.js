import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>This is your username: {props.username}</p>
        </div>
    );
};

export default userOutput;