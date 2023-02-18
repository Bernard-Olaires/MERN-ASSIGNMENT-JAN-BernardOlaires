import React, {useState} from 'react';
import ProductForm from '../components/ProductForm'
import ProductDisplay from '../components/ProductDisplayAll'

const Main = (props) => {

    const [productList, setProductList] = useState([]);



    return(
        <div>
            <ProductForm productList={productList} setProductList={setProductList}/>
            <ProductDisplay productList={productList} setProductList={setProductList}/>
        </div>
    )
}

export default Main;