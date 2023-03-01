import React from 'react';

const AuthorForm = (props) => {

    const {author, setAuthor, submitHandler, errors} = props

    const handleInputChange = (e) => {
        setAuthor({...author, [e.target.name]: e.target.value})
    }

    return(
        <div className="author-form-container">
            <form className='author-from' onSubmit={submitHandler}>
                <label className='name-label'>Name:</label>
                <input className='name-input' type='text' onChange={handleInputChange} value={author.name} name='name'/>
                {
                    errors.name?
                    <p className='error'>{errors.name.message}</p>:
                    null
                }
                <button className='sumbit-author'>Add Author</button>
            </form>
        </div>
    )
}

export default AuthorForm;