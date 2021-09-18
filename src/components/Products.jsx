import React from 'react';
import Filter from './Filter';
import ItemBox from './ItemBox';
import { Link } from 'react-router-dom';

import verified from '../images/products/verified.png';
import item1 from '../images/products/image (1).jpg';
import item2 from '../images/products/image (2).jpg';
import item3 from '../images/products/image (3).jpg';
import item4 from '../images/products/image (4).jpg';
import item5 from '../images/products/image (5).jpg';
import item6 from '../images/products/image (6).jpg';
import item7 from '../images/products/image (7).jpg';

function Products() {
    return (
        <>
            <header id="header-1"></header>
            <section id="section-1">
                <div className="title">
                    <Link to="./home"> Home</Link>
                    <div className="separator">/</div>
                    <Link to='./search'> Buy</Link>
                    <div className="separator">/</div>
                    <Link to="/agents">Estate Agents For Residence</Link>
                </div>
                <div className="container">
                    <Filter />
                    <main>
                        <div className="results">
                            <ItemBox image={item1} title="Agrani Business City" votes="14" phone="975485948" location="Rewa, Patna" verify={verified} />
                            <ItemBox image={item2} title=" Business City" votes="19" phone="875585948" location="Rewa, Patna" verify={verified} />
                            <ItemBox image={item3} title=" Business City" votes="27" phone="875585948" location="Rewa, Patna" verify={verified} />
                            <ItemBox image={item4} title=" Business City" votes="50" phone="875585948" location="Rewa, Patna" verify={verified} />
                            <ItemBox image={item5} title=" Business City" votes="9" phone="875585948" location="Rewa, Patna" verify={verified} />
                            <ItemBox image={item6} title=" Business City" votes="42" phone="875585948" location="Rewa, Patna" verify={verified} />
                            <ItemBox image={item7} title=" Business City" votes="5" phone="875585948" location="Rewa, Patna" verify={verified} />
                        </div>
                    </main>
                </div>
            </section>
        </>
    )
}

export default Products;
