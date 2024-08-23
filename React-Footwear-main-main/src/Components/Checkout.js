import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import path for useNavigate
import Header from './Header';
import Footer from './Footer';

const Checkout = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    country: '',
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, address, city, state, zip, paymentMethod } = formData;

    // Simple validation
    if (!firstName || !lastName || !address || !city || !state || !zip || !paymentMethod) {
      alert('Please fill out all required fields.');
      return;
    }



    console.log('Form data submitted: ', formData);


    navigate("/ordercomplete");
  };

  return (

    <div className="container mt-5">
      <Header />
      <div className="row row-pb-lg">
        <div className="col-sm-10 offset-md-1">
          <div className="process-wrap">
            <div className="process text-center active">
              <p>
                <span>01</span>
              </p>
              <h3>Shopping Cart</h3>
            </div>
            <div className="process text-center active">
              <p>
                <span>02</span>
              </p>
              <h3>Checkout</h3>
            </div>
            <div className="process text-center">
              <p>
                <span>03</span>
              </p>
              <h3>Order Complete</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-md-8 col-lg-6">
          <h3 className="mb-3">Checkout</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">Town/City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="zip">Zip Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <h3 className="mt-4">Payment Method</h3>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod1"
                  value="bank"
                  checked={formData.paymentMethod === 'bank'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="paymentMethod1">
                  Direct Bank Transfer
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod2"
                  value="check"
                  checked={formData.paymentMethod === 'check'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="paymentMethod2">
                  Check Payment
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod3"
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="paymentMethod3">
                  PayPal
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms"
                  required
                />
                <label className="form-check-label" htmlFor="terms">
                  I have read and accept the terms and conditions
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary w-25 btn-block">
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
