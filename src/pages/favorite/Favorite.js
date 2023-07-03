import React, { useEffect, useState } from "react";

function Favorite({ setFavorite }) {
    const [favoriteBeers, setFavoriteBeers] = useState([]);

    useEffect(() => {
        localStorage.setItem("favoriteBeers", JSON.stringify(favoriteBeers));
        console.log(favoriteBeers);
    }, [favoriteBeers]);

    useEffect(() => {
        const storedFavoriteBeers = JSON.parse(localStorage.getItem("favoriteBeers"));
        if (storedFavoriteBeers) {
            setFavoriteBeers(storedFavoriteBeers);
        }
    }, []);

    function removeFavoriteBeer(beer) {
        const updatedFavorites = favoriteBeers.filter((favoriteBeer) => favoriteBeer.id !== beer.id);
        setFavoriteBeers(updatedFavorites);
        localStorage.setItem("favoriteBeers", JSON.stringify(updatedFavorites));
    }

    return (
        <main className="outer-container">
            <div className="inner-container">
                <div>
                    <h1>Favorite Beers</h1>
                    {favoriteBeers.length === 0 && <p>No favorite beers yet.</p>}
                    {favoriteBeers.map((beer) => (
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
            </div>
        </main>
    );
}

export default Favorite;
