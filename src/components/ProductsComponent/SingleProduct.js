import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {id, title, price, image, category} = product;
    return (
        <div className='col-md-3'>
            <Link style={{textDecoration:"none", color:"#000000"}} to={`/product/${id}`}>
                <div className='card m-2'>
                    <div class="card-header text-center">
                        <img className='img-fluid' style={{height: "200px"}} src={image} alt="" />
                    </div>
                    <div class="card-body">
                        <hp title={title}>{title.slice(0,30)}</hp>
                        <h6>{category}</h6>
                        
                    </div>
                    <div class="card-footer text-center">
                        <b><h6 className='m-0'>${price}</h6></b>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingleProduct;