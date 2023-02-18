import React, {useState} from 'react';
import axios from 'axios';


const ProductForm = (props) => {
    const {productList, setProductList} = props;

    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState("");
    // const [description, setDescription] = useState("");

    const [errors, setErrors] = useState({})

    const [product, setProduct] = useState({
        title:'',
        price:'',
        description:''    
    })

    const handleInputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setProduct({...product, [e.target.name]: e.target.value})
    }



    const onSubmitHandler = (e) => {
        // prevent defualt behavior of the submit
        e.preventDefault();

        //make a post request to create a new product
        axios.post('http://localhost:8000/api/postProduct', product)
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                setProductList([...productList, product])
                setProduct({        
                    title:'',
                    price:'',
                    description:'' 
                })
            })
            .catch((err)=>{
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }

    return (
        <form onSubmit={onSubmitHandler} className="form-style">
            <div>
                <label>Title:</label>
                <input type="text" onChange={handleInputChange} value={product.title} name='title'/>
                {
                    errors.title?
                    <p className='error'>{errors.title.message}</p>:
                    null
                }
            </div>
            <div>
                <label>Price:</label>
                <input type="number" onChange={handleInputChange} value={product.price} name='price'/>
                {
                    errors.price?
                    <p className='error'>{errors.price.message}</p>:
                    null
                }
            </div>
            <div>
                <label>Description:</label>
                <input type="text" onChange={handleInputChange} value={product.description} name='description'/>
                {
                    errors.description?
                    <p className='error'>{errors.description.message}</p>:
                    null
                }
            </div>
            <input type="submit" className='submit-button'/>
        </form>
    )
}

export default ProductForm;