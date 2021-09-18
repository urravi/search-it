import React from 'react';
import {Link} from 'react-router-dom';

function Error() {
    return (
        <div id="error">
            <div class="fof">
                <h1>Error 404</h1>
                <p>Page not Found </p>
                <br /> <br />
                <Link to="./home">Back to Home Page</Link>
            </div>
        </div>
    )
}

export default Error;
