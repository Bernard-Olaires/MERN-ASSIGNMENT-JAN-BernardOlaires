import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import AuthorForm from './AuthorForm';

const CreateAuthor = (props) => {
    const navigate = useNavigate();
    const {allAuthors, setAllAuthors} = props;
    const [erros, setErrors] = useState({})

    const [author, setAuthor] = useState({
        name:''
    })

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/createAuthor', author)
            .then((res)=> {
                setAllAuthors([...allAuthors, res.data])
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }

    return(
        <AuthorForm
        author={author}
        setAuthor={setAuthor}
        submitHandler={submitHandler}
        errors={erros}
        />
    )
}

export default CreateAuthor;