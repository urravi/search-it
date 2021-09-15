import React from 'react';
import ServiceBox from './ServiceBox';
import simg1 from '../images/services/1.jpg';
import simg2 from '../images/services/2.jpg';
import simg3 from '../images/services/3.jpg';
import simg4 from '../images/services/4.jpeg';
import qimg1 from '../images/services/5.jpg';
import qimg2 from '../images/services/6.jpg';
import qimg3 from '../images/services/7.jpg';
import qimg4 from '../images/services/8.jpg';

function Services() {
    return (
        <main id="services">
        <div>
            <div className="box-title">
                <p>Popular Services</p>
            </div>
            <div className="container">
                <ServiceBox image={simg1} class="right" heading="BUY PROPERTY" sub1="Flats" sub2="Plots" sub3="Top Agents" sub4="more..." />
                <ServiceBox image={simg2} class="right" heading="SELL PROPERTY" sub1="Listing" sub2="Advertise" sub3="Agents" sub4="more..." />
                <ServiceBox image={simg3} class="left" heading="RENOVATE " sub1="Repair" sub2="Paint" sub3="New Look" sub4="more..." />
                <ServiceBox image={simg4} class="left" heading="PLANNING " sub1="Floor Plan" sub2="Office" sub3="Interior Designer" sub4="more..." />
            </div>
        </div>
        <div>
            <div className="box-title">
                <p>Quick Categories</p>
            </div>
            <div className="container">
            <ServiceBox image={qimg1} class="left" heading="SINGLE FAMILY " sub1="Size" sub2="Location" sub3="Security" sub4="more..." />
            <ServiceBox image={qimg2} class="right" heading="FLATS " sub1="Size" sub2="Location" sub3="Security" sub4="more..." />
            <ServiceBox image={qimg3} class="right" heading="HOSTEL " sub1="Single Room" sub2="PG for Students" sub3="PG for Women" sub4="more..." />
            <ServiceBox image={qimg4} class="left" heading=" PLOTS" sub1="Residential" sub2="Commercial" sub3="Farming" sub4="more..." />
            </div>
        </div>
    </main>
    )
}

export default Services;
