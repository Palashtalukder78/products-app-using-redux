import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../redux/action/productAction';
import ProductsComponent from '../ProductsComponent/ProductsComponent';

const ProductList = () => {
    const products = useSelector((state)=> state);
    const dispatch = useDispatch();
    console.log(products);
    const fetchProducts = async() => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((error)=>{
                console.log("Error: ", error);
            })
            dispatch(setProduct(response.data))
    }
    useEffect(()=>{
        fetchProducts()
    },[])
    return (
        <div>
            <ProductsComponent />
        </div>
    );
};

export default ProductList;