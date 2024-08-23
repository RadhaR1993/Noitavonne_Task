import React from 'react'
import { Carousel } from 'react-bootstrap';
import menCollection from '../images/men.jpg'
import womenCollection from '../images/women.jpg'
import Header from './Header';
import Footer from './Footer';


const Home = () => {
  return (
    <div>
      {/*--------------- Carousel Start--------------------- */}
      <Header/>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/img_bg_1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div>
              <h1 className="head-1">Men's</h1>
              <h2 className="head-2">Shoes</h2>
              <h2 className="head-3">Collection</h2>
              <p className="category"><span>New trending shoes</span></p>
              <p><a href="#" className="btn btn-primary">Shop Collection</a></p>
            </div>
            {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/img_bg_2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="desc">
              <h1 className="head-1">Huge</h1>
              <h2 className="head-2">Sale</h2>
              <h2 className="head-3"><strong className="font-weight-bold">50%</strong> Off</h2>
              <p className="category"><span>Big sale sandals</span></p>
              <p><a href="#" className="btn btn-primary">Shop Collection</a></p>
            </div>
         
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/img_bg_3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="desc">
              <h1 className="head-1">New</h1>
              <h2 className="head-2">Arrival</h2>
              <h2 className="head-3">up to <strong className="font-weight-bold">30%</strong> off</h2>
              <p className="category"><span>New stylish shoes for men</span></p>
              <p><a href="#" className="btn btn-primary">Shop Collection</a></p>
            </div>
      
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      {/*--------------- Carousel End--------------------- */}

      
      {/*--------------- Collection Start--------------------- */}
      <div className="collections">
        <div className="colorlib-intro">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="intro">It started with a simple idea: Create quality, well-designed products that I wanted myself.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="colorlib-product">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 text-center">
                <div className="featured">
                  <a href="/Mens" className="featured-img" style={{backgroundImage: `url(${menCollection})`}}></a>
                  <div className="desc">
                    <h2><a href="#">Shop Men's Collection</a></h2>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 text-center">
                <div className="featured">
                  <a href="/Womens" className="featured-img" style={{backgroundImage: `url(${womenCollection})`}}></a>
                  {/* <a href="#" className='featured-img'> <img src={womenCollection} alt="" /> </a> */}
                  <div className="desc">
                    <h2><a href="#">Shop Women's Collection</a></h2>
                  </div>
                </div>
                <div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/*--------------- Collection End--------------------- */}
<Footer/>
    </div >
    </div >
   
  )
}

export default Home;