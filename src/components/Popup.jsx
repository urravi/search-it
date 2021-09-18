import React from 'react'

function Popup(props) {
    return (props.trigger) ? (
            <div className="popup-form" id="login-form">
                <form action="post" className="form-container">
                    <h2>Login</h2>
                    <input type="text" placeholder="Enter Your Email" id="email" required autocomplete="off" />
                    <input type="tel" id="phone" placeholder="Enter Your Phone Number" required autocomplete="off"/>
                    <button type="button" className="login-btn">Send OTP</button>
                    <button onClick= {() => props.setTrigger(false)}><i className="fas fa-times"></i></button>
                </form>
            </div>
    ) : "";
}

export default Popup;
