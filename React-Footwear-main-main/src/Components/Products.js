import React, { useEffect, useState } from 'react';
import './Product.css';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { storeAddToCart } from '../state/cartSlice';
import Header from './Header';
import Footer from './Footer';

export default function Products() {

    const dispatch = useDispatch();

    const [newdata, setNewdata] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({ size: '', color: '', brand: '', sort: '' });
    const [searchTerm, setSearchTerm] = useState('');

    let navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get("http://localhost:3000/products");
                console.log(res.data);
                setNewdata(res.data);
                setFilteredProducts(res.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }
        fetchData();
    }, []);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const applyFilters = () => {
        let filtered = [...newdata];

        if (filters.size) {
            filtered = filtered.filter(product => product.size === filters.size);
        }

        if (filters.brand) {
            filtered = filtered.filter(product => product.brand === filters.brand);
        }

        if (filters.sort) {
            filtered = filtered.sort((a, b) => {
                if (filters.sort === 'asc') {
                    return parseFloat(a.price) - parseFloat(b.price);
                } else {
                    return parseFloat(b.price) - parseFloat(a.price);
                }
            });
        }

        setFilteredProducts(filtered);
    };

    useEffect(() => {
        if (searchTerm) {
            const filtered = newdata.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(newdata);
        }
    }, [searchTerm, newdata]);

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

    function handleImageClick(productId) {
        navigate(`/detail/${productId}`);
    }

    return (
        <>
            <Header />
            <div className="row">
                <div className="col-lg-3 mt-2 filter-section">
                    <h2>Filter</h2>
                    <div className="filter-group">
                        <h4>Size</h4>
                        <select name="size" onChange={handleFilterChange}>
                            <option value="">All</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                    <div className="filter-group">
                        <h4>Brand</h4>
                        <select name="brand" onChange={handleFilterChange}>
                            <option value="">All</option>
                            <option value="sparx">Sparx</option>
                            <option value="adidas">Adidas</option>
                            <option value="woodland">Woodland</option>
                            <option value="red-chief">Red Chief</option>
                            <option value="nike">Nike</option>

                        </select>
                    </div>
                    <div className="filter-group">
                        <h4>Sort by Price</h4>
                        <select name="sort" onChange={handleFilterChange}>
                            <option value="">None</option>
                            <option value="asc">Low to High</option>
                            <option value="desc">High to Low</option>
                        </select>
                    </div>
                    <button onClick={applyFilters}>Apply Filters</button>
                </div>
                <div className="col-lg-8 text-center product-section">
                    <h2 className='mb-4'>All Products</h2>
                    <div className="search-bar mb-3">
                        <input
                            className='form-control ms-5 mt-4'
                            type="text"
                            placeholder="Search products by name..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <section>
                        <div className='row justify-content-center'>
                            {filteredProducts.map((item, index) => (
                                <div className='col-12 col-md-6 col-lg-3 mx-0 mb-4' key={index}>
                                    <div className="card p-0 overflow-hidden h-100 shadow">
                                        <img
                                            src={item.image}
                                            className="card-img-top img-fluid"
                                            onClick={() => handleImageClick(item.id)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <h5 className="card-title">{item.price}</h5>
                                            <button onClick={(e) => addProductToCart(e, item)} className="btn btn-primary">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}
