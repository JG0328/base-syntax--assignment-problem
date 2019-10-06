import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return (
        <div className="UserInput">
            <input type="text" onChange={props.changeMethod} value={props.initialValue}/>
        </div>
    );
};

export default userInput;