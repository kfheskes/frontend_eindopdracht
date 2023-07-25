import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ResultBeer from "../../components/ResultBeer/ResultBeer";
import ResultDish from "../../components/ResultDish/ResultDish";
import SearchBeer from "../../components/SearchBeer/SearchBeer";

function SearchResult({beer}) {
    const {id} = useParams();
    console.log(id)


    return (
        <div>
            <h1>Search Results</h1>
            <p>{id}</p>
        </div>
    );
}

export default SearchResult;
