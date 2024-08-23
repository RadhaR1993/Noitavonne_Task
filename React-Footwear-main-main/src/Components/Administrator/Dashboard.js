import React from 'react'
import { useNavigate } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';

const Dashboard = () => {
    let navigate = useNavigate()
    function HandleAdd() {

        navigate("/productlist")
    }

    function logout() {
        localStorage.clear("user")
        navigate("/")
    }
    return (
        <div>
            <Header />
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="bread"><span><a href="">Admin</a></span> / <span>Dashboard</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <div className="row">
                        <div className='col-lg-9 text-center rounded-pill' style={{ backgroundColor: "#88c8bc" }}>
                            <h2 className='my-auto text-light'>DASHBOARD</h2>
                        </div>
                        <div className='col-lg-3 text-end'>
                            <button onClick={() => logout()} className='btn btn-lg btn-primary rounded-pill'>LOGOUT</button>
                        </div>


                    </div>


                    <div className='container'>
                        <div className="row mt-4">

                            <div className='col-lg-4'>
                                <div className="jumbotron rounded-5">
                                    <h1 className="display-5 fw-bold">Products</h1> <hr className="my-4" /><p className="lead">
                                        <a onClick={HandleAdd} className="btn btn-primary btn-lg" style={{ backgroundColor: "#88c8bc" }} href="#" role="button">CLICK HERE</a>
                                    </p>
                                </div>
                            </div>

                            <div className='col-lg-4'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;