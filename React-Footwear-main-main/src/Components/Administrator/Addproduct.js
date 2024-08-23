import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function AddProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [Imagecode, setImagecode] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        size: '',
        color: '',
        price: '',
        brand: ''
    });

    useEffect(() => {
        if (id) {
            fetchProduct(id);
        }
    }, [id]);

    const fetchProduct = async (productId) => {
        try {
            const response = await axios.get(`http://localhost:3000/products/${productId}`);
            setFormData(response.data);

            if (response.data.image) {
                setImagecode(response.data.image);
            }
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setFormData({ ...formData, image: imageFile });
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = () => {
            const imagecode = reader.result.toString();
            setImagecode(imagecode);
        };
    };

    const handleAddProduct = async () => {
        try {
            let dataToSend = { ...formData };
            if (Imagecode) {
                dataToSend.image = Imagecode;
            }
            if (id) {
                await axios.put(`http://localhost:3000/products/${id}`, dataToSend);
            } else {
                await axios.post('http://localhost:3000/products', dataToSend);
            }
            navigate("/productlist");
        } catch (error) {
            console.error('Error adding/updating product:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">{id ? 'Edit Product' : 'Add Product'}</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image:</label>
                    <input type="file" id="image" name="image" className="form-control" onChange={handleImageChange} />
                    {Imagecode && (
                        <img src={Imagecode} alt="Product" style={{ marginTop: '10px', width: '100px' }} />
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="size" className="form-label">Size:</label>
                    <input type="text" id="size" name="size" className="form-control" value={formData.size} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="color" className="form-label">Color:</label>
                    <input type="text" id="color" name="color" className="form-control" value={formData.color} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price:</label>
                    <input type="text" id="price" name="price" className="form-control" value={formData.price} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="brand" className="form-label">Brand:</label>
                    <input type="text" id="brand" name="brand" className="form-control" value={formData.brand} onChange={handleChange} />
                </div>
                <button type="button" onClick={handleAddProduct} className="btn btn-primary">{id ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
}

export default AddProduct;
