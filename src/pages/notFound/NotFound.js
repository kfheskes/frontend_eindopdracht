import React from "react";
import {Link} from "react-router-dom";

function NotFound() {

    return(
        <h2>Oops..... Deze pagina bestaat niet ga terug naar <Link to="/">home</Link></h2>
    )
}

export default NotFound