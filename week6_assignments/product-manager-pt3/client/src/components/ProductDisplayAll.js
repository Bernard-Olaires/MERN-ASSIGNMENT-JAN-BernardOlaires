import React, {useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';

const ProductDisplayAll = (props) => {

    const navigate = useNavigate()
    const {productList, setProductList} = props;
    const {id} = useParams()

    useEffect(()=>{
        axios.get("http://localhost:8000/api/allProducts")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setProductList(res.data)
            })
            .catch((err)=>console.log(err))
    }, [])

    // const deleteHandler = () => {
    //     axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
    //     .then((res) => {
    //         navigate('/')
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }

    const deleteFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${idFromBelow}`)
            .then((res)=> {
                console.log(res.data)
                const newList = productList.filter((product, index) => product._id !== idFromBelow)
                setProductList(newList);
            })
            .catch((err)=> {
                console.log(err)
            })
            
    }

    return(
        <div>
            <h1>All Products:</h1>
            {
                productList.map((product, index)=>(
                    <div key={product._id}>
                        <Link to={`/oneProduct/${product._id}`}>{product.title}</Link>
                        <button onClick={() => deleteFilter(product._id)}>Delete Product</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductDisplayAll;