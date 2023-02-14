import React, { useState } from 'react';

const Form = (props) => {

    // getter and setter passed in App.js
    const {boxColorArray, setBoxColorArray} = props;

    // creating state only for this component
    const [color, setColor ] = useState({
        color:''
    });

    const onChangeHandler = (e) => {
        setColor(prevSate => {return {...prevSate, [e.target.name]: e.target.value}})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // add our new color to the boxArray WITHOUT losing what is already in there
        //    we need to create a new array and spread out the current values first
        //    then we add the new color as the last element in the array
        setBoxColorArray( [ ...boxColorArray, color ] );
    }


    return (
        <div>
            <form onSubmit={ handleSubmit } style={{ margin: "20px" }}>
                <div>
                    <label>Color</label>
                    <input 
                    type="text" 
                    name="color"
                    onChange={onChangeHandler}
                    />
                </div>
                <button>Add</button>
            </form>
    
        </div>
    )

}

export default Form;