import React, { useState } from 'react';

const Person = (props) => {
    
    const [ inBirthday, setBirthday] = useState(props.age);

    const { firstName, lastName, hairColor } = props;

    const handleClick = () => {
        setBirthday (inBirthday + 1);
    }

    return (
        <div>
            <h2> { lastName }, {firstName} </h2>
            <p>Age: {inBirthday} </p>
            <p>hari Color: {hairColor} </p>
            <button onClick= {handleClick}>Birthday Button for {firstName} {lastName} </button>
        </div>
    )
}

export default Person;