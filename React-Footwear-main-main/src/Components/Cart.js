import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeRemoveProduct, incrementQuantity, decrementQuantity } from '../state/cartSlice';
import { useNavigate } from 'react-router';
import Header from './Header';
import Footer from './Footer';


export default function Cart() {
    const cartProduct = useSelector((state) => state.cart);
    let [count, setCount] = useState(0);
    let navigate = useNavigate();
    let alltotal = 0;

    console.log("cartProduct", cartProduct);

    useEffect(() => {
        for (let index = 0; index < cartProduct.length; index++) {
            const element = cartProduct[index];
        }
    }, []);

    let dispatch = useDispatch();

    function handleIncrement(productId) {
        dispatch(incrementQuantity(productId));
    }

    function handleDecrement(productId) {
        dispatch(decrementQuantity(productId));
    }

    function HandleBuy() {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            navigate('/checkout');
        } else {
            navigate('/registrationform');
        }
    }


    let subtotal = 0;


    for (let i = 0; i < cartProduct.length; i++) {
        subtotal += parseInt(cartProduct[i].price) * cartProduct[i].quantity;
    }

    return (
        <div>
            <Header />
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="bread"><span><a href="/">Home</a></span> / <span>Shopping Cart</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row row-pb-lg">
                    <div className="col-md-10 offset-md-1">
                        <div className="process-wrap">
                            <div className="process text-center active">
                                <p><span>01</span></p>
                                <h3>Shopping Cart</h3>
                            </div>
                            <div className="process text-center">
                                <p><span>02</span></p>
                                <h3>Checkout</h3>
                            </div>
                            <div className="process text-center">
                                <p><span>03</span></p>
                                <h3>Order Complete</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-pb-lg">
                    <div className="col-md-12">
                        <div className="product-name d-flex">
                            <div className="one-forth text-left px-4">
                                <span>Product Details</span>
                            </div>
                            <div className="one-eight text-center">
                                <span>Price</span>
                            </div>
                            <div className="one-eight text-center">
                                <span>Quantity</span>
                            </div>
                            <div className="one-eight text-center">
                                <span>Total</span>
                            </div>
                            <div className="one-eight text-center px-4">
                                <span>Remove</span>
                            </div>
                        </div>

                        {cartProduct.map((eachData) => {
                            return (
                                <div className="product-cart d-flex" key={eachData.id}>
                                    <div className="one-forth">
                                        <div className="product-img" style={{ backgroundImage: `url(${eachData.image})` }}>
                                        </div>
                                        <div className="display-tc">
                                            <h3>{eachData.name}</h3>
                                        </div>
                                    </div>
                                    <div className="one-eight text-center">
                                        <div className="display-tc">
                                            <span className="price"> {eachData.price}</span>
                                        </div>
                                    </div>
                                    <div className="one-eight text-center">
                                        <div className="display-tc">
                                            <div className='d-flex'>
                                                <button className='btn btn-primary' onClick={() => handleDecrement(eachData.id)}>-</button>
                                                <input type="text" name="quantity" className="form-control input-number text-center" value={eachData.quantity} min="1" max="100" readOnly />
                                                <button className='btn btn-primary' onClick={() => handleIncrement(eachData.id)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="one-eight text-center">
                                        <div className="display-tc">
                                            <span className="price">₹ {parseInt(eachData.price) * eachData.quantity}</span>
                                        </div>
                                    </div>
                                    <div className="one-eight text-center">
                                        <div className="display-tc">
                                            <button className='btn btn-secondary' onClick={() => dispatch(storeRemoveProduct(eachData.id))}>X</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="row row-pb-lg">
                    <div className="col-md-12">
                        <div className="total-wrap">
                            <div className="row">
                                <div className="col-sm-8">
                                    <form action="#">
                                        <div className="row form-group">
                                            <div className="col-sm-3">
                                                <input type="submit" onClick={() => HandleBuy()} value="Buy Now" className="btn btn-primary" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-sm-4 text-center">
                                    <div className="total">
                                        <div className="sub">
                                            <p><span>Subtotal:</span> <span>{subtotal}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
