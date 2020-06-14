import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProductConsumer } from './api/context';

class Product extends Component {
   
    render() { 
        const {id,title,img,inCart,price} = this.props.product;
        return ( 
            <div className="card my-2 ml-3" style={{width:"18rem"}}>
                <ProductConsumer>
                    {(value)=>(
                        <div className="image-container p-1" 
                        onClick={()=>
                        {
                            value.handleDetail(id);
                            value.openModal(id);
                        }} >
                        <Link to="/prddetails">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link> 
                        
                {/**cart footer */} 
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {title}
                    </p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">$</span>
                        {price}
                    </h5>
                    <button className="btn btn-light" 
                        disabled={inCart?true:false}
                        onClick={()=>value.addToCart(id)}>
                        {inCart?(<p className="disabled">{""} in cart</p>
                        ):(<i className="fa fa-shopping-cart 3x"></i>)
                        }
                    </button>
                </div>
                
                </div>
                    )}
                </ProductConsumer>
            </div>
         );
    }
}

Product.propTypes ={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}
 
export default Product;