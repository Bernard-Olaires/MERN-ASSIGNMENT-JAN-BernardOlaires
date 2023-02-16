import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductDisplayAll = (props) => {

    const {productList, setProductList} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/allProducts")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setProductList(res.data)
            })
            .catch((err)=>console.log(err))
    }, [])



    return(
        <div>
            <h1>All Products:</h1>
            {
                productList.map((product, index)=>(
                    <div key={product._id}>
                        <Link to={`/oneProduct/${product._id}`}>{product.title}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductDisplayAll;