import React from 'react';
import { useSelector } from 'react-redux';
import SingleProduct from './SingleProduct';
import './ProductsComponent.css'
const ProductsComponent = () => {
    const products = useSelector((state)=> state.allProduct.products);
    return (
        <div class="container">
            {products.length < 1 ?
                <>
                    <div style={{height:"500px", display:"flex", alignItems:"center", justifyContent:"center", margin:"auto"}}>
                        <div class="balls">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                     </div>
                </>
                :
                <div className='row'>
                    {
                        products.map((product)=> <SingleProduct
                            key={product.id}
                            product= {product}
                        ></SingleProduct>)
                    }
                </div>
            }
        </div>
    );
};

export default ProductsComponent;