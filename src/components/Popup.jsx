import React from 'react'

function Popup() {
    return (
            <div className="popup-form" id="login-form">
                <form action="post" className="form-container">
                    <h2>Login</h2>
                    <input type="text" placeholder="Enter Your Email" id="email" required autocomplete="off" />
                    <input type="tel" id="phone" placeholder="Enter Your Phone Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required autocomplete="off"/>
                    <button type="button" className="login-btn">Send OTP</button>
                    <i className="fas fa-times" id="close"></i>
                </form>
            </div>
    )
}

export default Popup;
