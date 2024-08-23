import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { storeAddToCart } from '../state/cartSlice';
import Header from './Header';

function Detail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [detail, setDetail] = useState({});
    const [imageError, setImageError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/products/${id}`);
                setDetail(response.data);
            } catch (error) {
                console.error('Error fetching product detail:', error);
            }
        };

        if (id) {
            fetchProductDetail();
        }
    }, [id]);

    console.log("detail", detail);

    const handleImageError = () => {
        setImageError(true);
    };

    const buynow = () => {
        navigate("/cart");
    };

    function addProductToCart(e, product) {
        e.preventDefault();
        const cartProduct = {
            id: product.id,
            name: product.name,
            image: product.image,
            description: product.description,
            price: product.price,
            quantity: 1
        };
        dispatch(storeAddToCart(cartProduct));
    }

    return (
        <>
            <Header />
            <div className='menBanner'>
                <div className="breadcrumbs">
                    <div className="container">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-lg-5">
                                <p className="bread"><span><a href="/">Home</a></span> / <span>Product Details</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-4">
                {Object.keys(detail).length > 0 && (
                    <div className="row">
                        <div className="col-md-6">
                            {imageError ? (
                                <p>Error loading image</p>
                            ) : (
                                <img
                                    src={detail.image}
                                    alt={detail.name}
                                    className="img-fluid"
                                    onError={handleImageError}
                                />
                            )}
                        </div>
                        <div className="col-md-6">
                            <h2>{detail.name}</h2>
                            <p>Price: {detail.price}</p>
                            <p>Size: {detail.size}</p>
                            <p>Color: {detail.color}</p>
                            <p>Brand: {detail.brand}</p>
                            {/* Add more details if needed */}
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-3">
                            <button onClick={(e) => addProductToCart(e, detail)} className="btn btn-primary btn-sm mx-2">Add to Cart</button>
                            <button onClick={buynow} className="btn btn-primary btn-sm mx-2">Buy Now</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Detail;
