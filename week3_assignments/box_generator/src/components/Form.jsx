import React, { useState } from 'react';

const Form = (props) => {

    // getter and setter passed in App.js
    const { boxColorArray, setBoxColorArray } = props;

    // creating state only for this component
    const { color, setColor } = useState("");

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
                    <label htmlFor="firstName">Color</label>
                    <input 
                    type="text" 
                    name="color"
                    onChange={ (e) => setColor(e.target.value) }
                    />
                </div>
                <button>Add</button>
            </form>
    
        </div>
    )

}

export default Form;