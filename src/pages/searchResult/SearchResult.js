import React from "react";
import { useParams } from "react-router-dom";


function SearchResult() {

const {id} = useParams();
    console.log(id)



    return (
        <div>
            <p>{id}</p>
            <p></p>
        </div>
    );
}

export default SearchResult;
