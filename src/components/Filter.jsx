import React from 'react';

function Filter() {
    return (
        <aside>                                      
                    <div class="sorting">
                        <div class="sort-by">
                            <h2>Sort Result By</h2>

                            <ul>
                                <li>Top Results</li>
                                <li>Popularity</li>
                                <li>Location</li>
                                <li>Ratings</li>
                                <li>Best Deals</li>
                            </ul>
                        </div>
                        <div class="sort-by">
                            <h2>Popular Cities</h2>
                            <ul>
                                <li>Delhi</li>
                                <li>Mumbai</li>
                                <li>Kolkata</li>
                                <li>Patna</li>
                                <li>Ranchi</li>
                                <li>Chennai</li>
                                <li>Bengaluru</li>
                            </ul>
                        </div>
                    </div>
                </aside>
    )
};

export default Filter;
