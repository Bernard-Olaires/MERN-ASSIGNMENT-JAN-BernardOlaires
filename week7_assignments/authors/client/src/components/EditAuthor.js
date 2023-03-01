import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import AuthorForm from './AuthorForm';

const EditAuthor = (props) => {

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const {id} = useParams();
    const [author, setAuthor] = useState({
        name: ''
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAuthor/${id}`)
            .then((res) => {
                setAuthor(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    const editAuthorHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateAuthor/${id}`, author)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }
    
    return(
        <div className='edit-author-container'>
            <header>
                <Link className='home' to={`/`}>Home</Link>
                <p className='edit-header'>Edit {author.name}</p>
            </header>
            <AuthorForm
            author={author}
            setAuthor={setAuthor}
            submitHandler={editAuthorHandler}
            errors={errors}
            />
        </div>
    )
}

export default EditAuthor;