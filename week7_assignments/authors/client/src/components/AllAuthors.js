import React, {useEffect} from 'react';
import axios from 'axios';
import {Link,useNavigate, useParams} from 'react-router-dom';

const AllAuthors = (props) => {

    const navigate = useNavigate()
    const {id} = useParams
    const {allAuthors, setAllAuthors} = props;


    useEffect(() => {
        axios.get('http://localhost:8000/api/allAuthors')
            .then((allAuthors) => {
                setAllAuthors(allAuthors.data)
            })
            .catch((err)=> {
                console.log(err)
            })
    })

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteAuthor/${id}`)
            .then((res)=>{
                navigate('/')
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return(
        <div>
            <header className='all-authors-header'>
                <h1>Favorite Authors</h1>
                <Link to={'/newAuthor/form'}>Add an Author</Link>
            </header>
            <div className='author-table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {
                        allAuthors.map((author, index) =>(
                            <tbody key={author._id}>
                                <tr>
                                    <td>{author.name}</td>
                                    <td>
                                        <Link to={`/updateAuthor/${author._id}`} className="edit-autor">Edit</Link>
                                        | <button onClick={deleteHandler} className="delete-button">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}

export default AllAuthors;