import React from 'react';
import image from '../images/projects/project1.jpg';
import {Link} from 'react-router-dom';

function Product_Details() {
    return (
        <>
            <header id="header-2">
                <div className="screen">
                    <img src={image} alt="project" />
                    <div className="info">
                        <h1>Agrani Bob City</h1>
                        <p><span>4.0</span> &#9733; &#9733; &#9733; &#9733; &#9734; <span>54 Votes</span></p>
                        <p>&#9743; 970654311</p>
                        <p>&#9873; Rewa, Patna</p>
                    </div>
                    <div className="options">
                        <span className="left"><i className="fas fa-map-marked-alt"></i>
                            <i className="fas fa-phone-alt"></i></span>
                        <span className="right"><i className="far fa-edit"></i>
                            <i className="fas fa-share"></i></span>
                    </div>
                    <div className="star-wrapper">
                        <Link className="fas fa-star s1"></Link>
                        <Link className="fas fa-star s2"></Link>
                        <Link className="fas fa-star s3"></Link>
                        <Link className="fas fa-star s4"></Link>
                        <Link className="fas fa-star s5"></Link>
                    </div>
                </div>
            </header>
            <section id="section-3"></section>


        </>
    )
}

export default Product_Details;
