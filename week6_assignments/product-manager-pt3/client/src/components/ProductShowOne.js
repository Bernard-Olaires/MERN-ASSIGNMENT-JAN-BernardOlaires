import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const ProductShowOne = (props) => {

    const navigate = useNavigate()
    const {id} = useParams();
    const [oneProduct, setOneProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err)=>console.log(err))
    },[id])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
        .then((res) => {
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }


    
    return (
        <div>
            <h2>{oneProduct.title}</h2>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <Link to={`/editProduct/${oneProduct._id}`}>Edit</Link>
            <button onClick={deleteHandler}>Delete Product</button>
        </div>
    )
}

export default ProductShowOne;

