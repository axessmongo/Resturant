import React from 'react';
import { Link } from 'react-router-dom';
import "./Category.scss";
import { FaFacebookF, FaTwitter, FaVimeoV, FaGooglePlusG } from 'react-icons/fa'

const CategoryList = ({ categories }) => {
  return (
    <>
      <div className='section-wrapper bg-whitesmoke'>
        <div className='container'>
          <div className='sc-title'>categories</div>
          <section className='sc-category grid'>
            {
              categories.map(category => {
                const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail } = category;

                return (
                  <Link to={`/meal/category/${title}`} className="category-itm align-center justify-center" key={id}>
                    <div className='category-itm-img h-100 w-100 flex align-center justify-center'>
                      <img src={thumbnail} alt={title} />
                      <div className='category-itm-title bg-orange'>
                        <h3 className='text-white fs-11 fw-6 ls-1 text-uppercase'>{title}</h3>
                      </div>
                    </div>
                  </Link>
                )
              })
            }
          </section>
        </div>
      </div>
      <section className=''>
        <footer className="main-footer">
          <div className="container">
            <div className="footer-content">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div className="logo-widget footer-widget">
                   
                  <div className='text-white fs-3'>
                        <h1 className='text-white'> Opening Hours </h1>
                        <br />
                        Monday - Friday: 11:00 AM - 10:00 PM <br />
                        Saturday - Sunday: 9:00 AM - 11:00 PM
                      </div>
                    <ul className="footer-social text-center pt-5">
                      <li><a href="#"><FaFacebookF /></a></li>
                      <li><a href="#"><FaTwitter /></a></li>
                      <li><a href="#"><FaVimeoV /></a></li>
                      <li><a href="#"><FaGooglePlusG /></a></li>
                    </ul>
                  
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column">
                  <div className="service-widget footer-widget text-center">
                    <div className="footer-title ">Our Services</div>
                    <ul className="list">
                      <li className='fs-3'><a href="#">Beef</a></li>
                      <li className='fs-3'><a href="#">Chicken</a></li>
                      <li className='fs-3'><a href="#">Miscellaneous</a></li>
                      <li className='fs-3'><a href="#">Seafood</a></li>
                      <li className='fs-3'><a href="#">Vegetarian</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-widget">
                  <div className="contact-widget footer-widget">
                    <div className="footer-title">Contacts</div>
                    <div className="text">
                      <p>Subscribe to our newsletter to receive updates on special offers, events, and new menu items.</p>
                      <h4 className='text-white'>
                        Feel free to customize this content to better fit the specific details and branding of your restaurant.</h4>
                      <p>987654321</p>
                      <p>info@flavorfusion.live</p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 column">
                  <div className="copyright">
                    <a href="#">flavorfusion</a> &copy; 2024 All Right Reserved
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 column">
                  <ul className="footer-nav">
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </section>
    </>
  )
}

export default CategoryList