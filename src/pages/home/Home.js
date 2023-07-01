import React from "react"
import SearchBeer from "../../components/SearchBeer";
import axios from "axios";

function Home () {

async function fetchDataBeer (){
    try {
        const result = await axios.get(`https://api.punkapi.com/v2/`);
        console.log(result.data)
    } catch (e) {
        console.error(e);
    }
}
fetchDataBeer()

return (
    <main className="outer-container">
        <div className="inner-container">
        <SearchBeer/>
        </div>
    </main>

)
}

export default Home