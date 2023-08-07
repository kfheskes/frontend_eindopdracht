import React from "react";
import {Link} from "react-router-dom";
import './NotFound.css'

function NotFound() {

    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <div className="pages-padding">
                    <h3 className='page-not-found'>
                        Oops..... This page does not exist go to <Link to="/"
                                                                       className='page-not-found-link'>HOME</Link>
                    </h3>
                </div>
            </div>
        </div>

    )
}

export default NotFound