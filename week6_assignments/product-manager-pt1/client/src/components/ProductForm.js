import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        // prevent defualt behavior of the submit
        e.preventDefault();

        //make a post request to create a new product
        axios.post('http://localhost:8000/api/postProduct', {
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Title:</label>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price:</label>
                <input type="number" onChange = {(e)=>setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description:</label>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </div>
            <input type="submit"/>
        </form>
    )
}

export default ProductForm;