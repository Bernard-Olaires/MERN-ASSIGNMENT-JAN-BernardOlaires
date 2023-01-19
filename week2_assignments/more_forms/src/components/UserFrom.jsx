import React, { useState } from 'react';

const UserFrom = ( ) => {

    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPW, setConfirmPW ] = useState("");

    return (

        <div>
            <form onSubmit = { (e) => e.preventDefault() }>

                <div>
                    <label>First Name:</label>
                    <input type="text" onChange = { (e)=> setFirstName(e.target.value) } />
                </div>
                {
                    firstName.length < 2 && firstName.length > 0 ?
                    (<p>First Name must be at least 2 characters </p>) : null
                }

                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange = { (e) => setLastName(e.target.value) } />
                </div>
                {
                    lastName.length < 2 && lastName.length > 0 ?
                    (<p>Last Name must be at least 2 characters </p>) : null
                }

                <div>
                    <label>Email:</label>
                    <input type="text" onChange = { (e) => setEmail(e.target.value) } />
                </div>
                {
                    email.length < 5 && email.length > 0 ?
                    (<p>Email must be at least 5 characters </p>) : null
                }

                <div>
                    <label>Password:</label>
                    <input type="text" onChange = { (e) => setPassword(e.target.value) } />
                </div>
                {
                    password.length < 8 && password.length > 0 ?
                    (<p>Password must be at least 8 characters </p>) : null
                }

                <div>
                    <label>Confrim Password:</label>
                    <input type="text" onChange = { (e) => setConfirmPW(e.target.value) } />
                </div>
                {
                    confirmPW !== password ? <p>Passwords must match!</p> : null
                }


            </form>
            <div>
                <h2>Your Form Data:</h2>

                <h3>First Name:</h3>
                <span>{ firstName }</span>

                <h3>Last Name:</h3>
                <span>{ lastName }</span>

                <h3>Email: </h3>
                <span>{ email }</span>

                <h3>Password:</h3>
                <span>{ password }</span>

                <h3>Confirm Password:</h3>
                <span>{ confirmPW }</span>
            </div>
        </div>
    )




}

export default UserFrom