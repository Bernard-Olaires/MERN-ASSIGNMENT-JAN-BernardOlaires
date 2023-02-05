import React from 'react';
import {useParams} from 'react-router-dom' 

const Number = (props) => {
    const {number} = useParams()

    return (
        <h2>The number is: {number}</h2>
    )

}


export default Number;