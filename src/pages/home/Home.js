import React, {useEffect, useState} from "react"
import SearchBeer from "../../components/SearchBeer";
import axios from "axios";


function Home () {
    const [beerData, setBeerData] = useState([]);
    const [description, setDescription] = useState('');
    const [error, toggleError] = useState(false)

    useEffect(()=> {
    async function fetchDataBeer() {
        toggleError(false)
        try {
            const result = await axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=80`);
            console.log(result.data)
            setBeerData(result.data);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }
    if (description) {
        fetchDataBeer();
    }
}, [description])

return (
    <main className="outer-container">
        <div className="inner-container">
        <SearchBeer setDescriptionHandler={setDescription}/>
            {error && <span> Oeps! deze locatie bestaat niet</span>}
            <span>
                {Object.keys(beerData).length > 0 &&
                    <>
                <h2>{beerData[0].name}</h2>
                        <p>{beerData[0].description}</p>
                        <img src={beerData[0].image_url} alt={beerData[0].name} />
                        <h3>Food Pairing:</h3>
                        <ul>
                            {beerData[0].food_pairing.map((pairing, index) => (
                                <li key={index}>{pairing}</li>
                            ))}
                        </ul>
                    </>
                }
            </span>
        </div>
    </main>

)
}

export default Home