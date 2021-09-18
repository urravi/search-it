import React from 'react';
import { Link } from 'react-router-dom';


function Main() {
    return (
        <div>
            <header id="header">
            <h2><span>Don't Wait</span> To Buy Real Estate</h2>
            <h2>Buy Real Estate And <span>Wait.</span></h2>
            </header>
            <section id="section">
            <div class="container">
                    <ul>
                        <Link to="./search"><li><i class="fas fa-key"></i> Buy <i class="fas fa-chevron-right"></i></li></Link>
                        <Link to="./search"><li><i class="fas fa-hotel"></i>Rent <i class="fas fa-chevron-right"></i></li></Link>
                        <Link to="./search"><li><i class="fas fa-hand-holding-usd"></i>Sell <i class="fas fa-chevron-right"></i></li></Link>
                        <Link to="./search"><li><i class="fas fa-bed"></i> PG, Hotels and Rooms <i class="fas fa-chevron-right"></i></li></Link>
                    </ul>
            </div>
        </section>
        </div>
    )
}

export default Main;
