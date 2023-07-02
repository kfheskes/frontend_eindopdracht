import React, { useEffect, useState } from "react";
import SearchBeer from "../../components/SearchBeer";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    const [beerData, setBeerData] = useState([]);
    const [description, setDescription] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchDataBeer() {
            setError(false);
            try {
                const result = await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${description}`);
                console.log(result.data)
                setBeerData(result.data);
                if (result.data.length === 0) {
                    setError(true);
                }
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }

        if (description) {
            fetchDataBeer();
        }

        return function cleanup() {
            controller.abort();
        };
    }, [description, navigate]);

    return (
        <main className="outer-container">
            <div className="inner-container">
                {error && <span className="wrong-beer-error">Oh! Unknown beer try again</span>}
                <SearchBeer setBeerHandler={setDescription} />
                <span>
                    {beerData.length > 0 &&
                        beerData.map((beer) => (
                            <div key={beer.id}>
                                <h2>{beer.name}</h2>
                                <p>{beer.description}</p>
                                <img src={beer.image_url} alt={beer.name} />
                                <h3>Food Pairing:</h3>
                                <ul>
                                    {beer.food_pairing.map((pairing) => (
                                        <li>{pairing}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                </span>
            </div>
        </main>
    );
}

export default Home;