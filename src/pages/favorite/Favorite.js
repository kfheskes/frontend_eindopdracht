import React, { useEffect, useState } from "react";
import axios from "axios";

function Favorite(key) {
    const [error, setError] = useState (false);
    const [favoriteBeers, setFavoriteBeers] = useState([]);
    const [beerDescription, setBeerDescription] = useState("")

    useEffect(() => {
        const controller = new AbortController();
    async function fetchDataFavorite() {
        setError(false);
        try {
            const result = await axios.get(
                `https://api.punkapi.com/v2/beers?beer_name=${beerDescription}`
            );
            console.log(result.data);
            setFavoriteBeers(result.data);
            if (result.data.length === 0) {
                setError(true);
            }
        } catch (e) {
            console.error(e);
            setError(true);
        }
    }

    if (beerDescription) {
        fetchDataFavorite();
    }

    return function cleanup() {
        controller.abort();
    };
}, [beerDescription]);



    useEffect(() => {
        setBeerDescription (localStorage.getItem('favoriteBeer' ))
    }, []);


    // localStorage.removeItem('favoriteBeers')

    function removeFavoriteBeer(beer) {
        const updatedFavorites = favoriteBeers.filter((favoriteBeer) => favoriteBeer.id !== beer.id);
        setFavoriteBeers(updatedFavorites);
        localStorage.setItem('favoriteBeer', beer.name);
    }

    return (
        <main className="outer-container">
            <div className="inner-container">

                    {error && (
                        <span className="wrong-beer-error">Oh! No favorite beer selected</span>)}
                    <h2>Favorite Beers</h2>
                    {favoriteBeers.length === 0 && <p>No favorite beers yet.</p>}
                    {favoriteBeers.length > 0 &&
                    favoriteBeers.map((beer) => (
                      <div key={beer.id}>
                          <h2>{beer.name}</h2>
                           <p>{beer.description}</p>
                            <img src={beer.image_url} alt={beer.name} />
                            <h3>Food Pairing:</h3>
                            <ul>
                             {beer.food_pairing.map((pairing) => (
                                    <li key={pairing}>{pairing}</li>
                                ))}
                            </ul>
                            <button onClick={() => removeFavoriteBeer(beer)}>Remove from Favorites</button>
                        </div>
                    ))}
            </div>
        </main>
    );
}

export default Favorite;
