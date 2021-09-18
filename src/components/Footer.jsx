import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer" id="footer">
                <div className="about">
                    <h2>About The Company</h2>
                    <p>This is an example website for Real estates companies that is build for the purpose of learning.
                    </p>
                    <br />
                    <h4>For any queries -</h4>
                    <span> <i className="fa fa-phone"> 1800 123 4567</i></span><br />
                    <pspan> <i className="far fa-envelope"> email@company.info</i></pspan>
                </div>
                <div className="newsletters">
                    <h2>Subscribe Here</h2>
                    <input type="email" name="email" placeholder="example@email.com" />
                    <i className="fas fa-arrow-right"></i>
                    <div className="social">
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-google-plus-square"></i>
                        <i className="fab fa-instagram-square"></i>
                        <i className="fab fa-twitter-square"></i>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;
