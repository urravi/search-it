import React from 'react';

function ServiceBox(props) {
    return (
        <div className="service-box">
            <img src={props.image} className={props.class} alt="" />
            <ul>
                <a href="/"><li><h4>{props.heading}</h4></li></a>
                <a href="/"><li>{props.sub1}</li></a>
                <a href="/"><li>{props.sub2}</li></a>
                <a href="/"><li>{props.sub3}</li></a>
                <a href="/"><li>{props.sub4}</li></a>
            </ul>
        </div>
    )
}

export default ServiceBox;
