import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Productlist() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:3000/products/${productId}`);
            fetchData();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (

        <div className="container">
            <Header />

            <Link to="/addproduct" className="btn btn-primary mb-3">Add Product</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Size</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td><img src={product.image} alt={product.name} height="50px" /></td>
                            <td>{product.color}</td>
                            <td>{product.price}</td>
                            <td>{product.brand}</td>
                            <td>{product.size}</td>
                            <td>
                                <button className="btn btn-primary me-2" onClick={() => navigate(`/addproduct/${product.id}`)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer />
        </div>
    );
}

export default Productlist;
