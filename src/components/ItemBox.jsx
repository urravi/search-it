import React from 'react';
import {Link } from 'react-router-dom';

function ItemBox(props) {
    return (
        <div class="item-box">
            <div class="item-img">
                <img src={props.image} alt="" />
            </div>
            <div class="info">
                <h1>{props.title}</h1>
                <p><span>4.0</span> &#9733;	&#9733;	&#9733;	&#9733;	&#9734; <span>{props.votes} Votes</span></p>
                <p>&#9743; {props.phone}</p>
                <p>&#9873; {props.location}</p>
                <button> <Link to="./productDetails">Best Deal <i class="fas fa-chevron-circle-right"></i></Link></button>
            </div>
            <div class="verify">
                <img src={props.verify} alt="Verification Panding" />
            </div>
        </div>
    )
}

export default ItemBox;
