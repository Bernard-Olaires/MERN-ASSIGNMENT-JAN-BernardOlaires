import React from 'react';
import {useParams} from 'react-router-dom'

const ChangeColor = (props) => {
    const {word,backgroundColor, wordColor} = useParams()


    return (
        <div>
            <h1 style={{background:backgroundColor, color:wordColor}}>The word is: {word} </h1>
        </div>
    )
}

export default ChangeColor;