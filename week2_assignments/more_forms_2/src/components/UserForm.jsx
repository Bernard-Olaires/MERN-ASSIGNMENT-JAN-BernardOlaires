import React, { useState } from 'react';

const UserFrom = ( ) => {

    // First Name
    const [ firstName, setFirstName ] = useState("");
    const [ firstNameError, setFirstNameError ] = useState("");

    // Last Name
    const [ lastName, setLastName ] = useState("");
    const [lastNameError, setLastNameError ] = useState("");

    // Email
    const [ email, setEmail ] = useState("");
    const [ emailError, setEmailError ] = useState("");

    // Password
    const [ password, setPassword ] = useState("");
    const [ passwordError, setPasswordError ] = useState("")

    // Confirm Passowrd 
    const [ confirmPW, setConfirmPW ] = useState("");
    // const [ confirmPWError, setConfirmPWError ] = useState("");

    // Frist Name set and validations
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        return firstName.length < 1 ? setFirstNameError("First name must be at least 2 characters long.") :
        firstName > 0 ? setFirstNameError("First name must be at least 2 characters long.") :
        setFirstNameError("");
    }

    // Last Name set and validations
    const handleLastName = (e) => {
        setLastName(e.target.value);
        return lastName.length < 1 ? setLastNameError("Last name must be at least 2 characters long.") :
        lastName > 0 ? setLastNameError("Last Name must be at least 2 characters long.") :
        setLastNameError("");
    }

    // Email set and validations
    const handleEmail = (e) => {
        setEmail(e.target.value);
        return email.length < 4 ? setEmailError("Email must be at least 5 characters long.") :
        email > 0 ? setEmailError("Email must be at least 5 characters long.") :
        setEmailError("");
    }

    // Password set and validations 
    const handlePassword = (e) => {
        setPassword(e.target.value);
        return password.length < 7 ? setPasswordError("Password must be at least 8 characters long.") :
        password > 0 ? setPasswordError("Password must be at least 8 characters long") :
        setPasswordError("");
    }

    // Confrim Password set and validations
    // const handleConfirmPW = (e) => {
    //     setConfirmPW(e.target.value);
    //     return confirmPW !== password ? setConfirmPWError("Passwords must match!") : setConfirmPWError(null);
    // }



    return (

        <div>
            <form onSubmit = { (e) => e.preventDefault() }>

                <div>
                    <label>First Name:</label>
                    <input type="text" onChange = { handleFirstName } />
                </div>
                {
                    firstNameError ?  <p>{ firstNameError }</p> : null
                }

                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange = { handleLastName } />
                </div>
                {
                    lastNameError ? <p> {lastNameError } </p>: null
                }

                <div>
                    <label>Email:</label>
                    <input type="text" onChange = { handleEmail } />
                </div>
                {
                    emailError ? <p>{ emailError }</p> : null
                }

                <div>
                    <label>Password:</label>
                    <input type="text" onChange = { handlePassword } />
                </div>
                {
                    passwordError ? <p> { passwordError }</p> : null
                }

                <div>
                    <label>Confrim Password:</label>
                    <input type="text" onChange = { (e) => setConfirmPW(e.target.value) } />
                </div>
                {
                    confirmPW !== password ? <p>Passwords must match.</p> : null
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