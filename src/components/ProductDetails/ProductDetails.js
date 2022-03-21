import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeFromSelectedProduct, selectedProduct } from '../../redux/action/productAction';
import './ProductDetails.css';

const ProductDetails = () => {
    const {productId} = useParams();
    const product = useSelector((state)=> state.product);
    const {id,title, image, price, category, description} = product;
    const dispatch = useDispatch();
    const fetchProduct = async () =>{
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((error)=>{
                console.log(error);
            })
        dispatch(selectedProduct(response.data))
    }
    useEffect(()=>{
        if(productId && productId !== ""){
            fetchProduct()
        } 
        return () => {
            dispatch(removeFromSelectedProduct())
        }
    },[productId])
    return (
        <div>
            <div class="container my-5">
                {
                    Object.keys(product).length === 0 ?
                    (
                        <div style={{height:"500px", display:"flex", alignItems:"center", justifyContent:"center", margin:"auto"}}>
                            <div class="balls">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div class="row" style={{display:"flex", alignItems:"center"}}>
                        <div class="col-md-6">
                            <div className='text-center'>
                                <img style={{width:"70%"}} className='imgt-fluid' src={image} alt="" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div>
                                <h5>{title}</h5>
                                <p><b>{category}</b></p>
                                <p className='text-justify'>{description}</p>
                                <h3>
                                    {price ?
                                        (
                                            <>
                                                <div>${price}</div>
                                                <button type="button" class="btn btn-primary">Add To Card</button>
                                            </>
                                        )
                                        :
                                        (
                                            <p></p>
                                        )
                                    }
                                </h3>

                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ProductDetails;