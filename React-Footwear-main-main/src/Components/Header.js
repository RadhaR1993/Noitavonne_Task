import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
    const navigate = useNavigate();
    const count = useSelector((state) => state.cart);
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;

    function logout(e) {
        e.preventDefault();
        localStorage.removeItem("loggedInUser");
        navigate("/");
    }

    function HandleAdmin() {
        const name = localStorage.getItem('name');
        if (name) {
            navigate('/admin');
        } else {
            navigate('/adminlogin');
        }
    }

    return (
        <nav className="colorlib-nav" role="navigation">
            <div className="top-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7 col-md-9">
                            <div id="colorlib-logo">
                                <a href="index.html">MyFootwear</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-10 text-left menu-1">
                            <ul>
                                <li className="active"><Link to="/">Home</Link></li>
                                <li><Link to="/products">All Products</Link></li>
                                <li onClick={HandleAdmin}>Admin</li>
                                <li className="cart text-end">
                                    <Link to="/cart">
                                        <i className="icon-shopping-cart"></i> Cart [{count.length}]
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 text-end">
                            {!loggedInUser ? (
                                <Link to={"/registrationform"}>
                                    <button className='btn btn-sm btn-primary mt-3'>LOGIN</button>
                                </Link>
                            ) : (
                                <button onClick={logout} className='btn btn-sm btn-primary mt-3'>LOGOUT</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="sale">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2 text-center">
                            <div className="row">
                                <div className="owl-carousel2">
                                    <div className="item carousel-item active">
                                        <div className="col">
                                            <h3><a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
                                        </div>
                                    </div>
                                    <div className="item carousel-item">
                                        <div className="col">
                                            <h3><a href="#">Our biggest sale yet 50% off all summer shoes</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
