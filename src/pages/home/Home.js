import React, { useEffect, useState } from "react";
import SearchBeer from "../../components/SearchBeer/SearchBeer";
import axios from "axios";
import ButtonAddToFavorite from "../../components/buttonAddToFavorite/ButtonAddToFavorite";
import SearchDish from "../../components/searchDish/SearchDish";
import ResultBeer from "../../components/ResultBeer/ResultBeer";

function Home() {
    const [description, setDescription] = useState("");
    const [beerData, setBeerData] = useState([]);
    const [dishData, setDishData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchDataBeer() {
            setError(false)
            try {
                const result = await axios.get(
                    `https://api.punkapi.com/v2/beers?beer_name=${description}`
                );
                console.log(result.data);
                setBeerData(result.data);
                console.log(error)
                if (result.data.length === 0) {
                    setError(true);
                } else {
                    setError(false);
                }
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }

        async function fetchDataDish() {
            setError(false)
            try {
                const result = await axios.get(
                    `https://api.punkapi.com/v2/beers?food=${description}`
                );
                console.log(result.data);
                setDishData(result.data);
                if (result.data.length === 0) {
                    setError(true);
                } else {
                    setError(false);
                }
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }

        if (description) {
            fetchDataBeer();
            fetchDataDish();
        }

        return function cleanup() {
            controller.abort();
        };
    }, [description]);

    // function buttonAddToFavorite(beer) {
    //     console.log("Added beer to favorites:", beer);
    //     localStorage.setItem("favorites", beer.name);
    // }
    //
    // function addToDishFavorites(dish) {
    //     console.log("Added dish to favorites:", dish);
    //     localStorage.setItem("favorites", dish.name);
    // }

    return (
        <main className="outer-container">
            <div className="inner-container">
                {error && (
                    <span className="wrong-beer-error">Oh! Unknown beer try again</span>
                )}
                <SearchBeer setBeerHandler={setDescription} />
                <SearchDish setDishHandler={setDescription} />
                <span>
                    {beerData.length > 0 &&
                        beerData.map((beer) => (
                            <div key={beer.id}>
                                <ResultBeer beer={beer}/>
                                {/*<ButtonAddToFavorite beer={beer} beerHandler={buttonAddToFavorite} />*/}
                            </div>
                        ))}
                </span>

                <span>
                    {dishData.length > 0 &&
                        dishData.map((dish) => (
                            <div key={dish.id}>
                                <h2>{dish.name}</h2>
                                <p>{dish.description}</p>
                                <img src={dish.image_url} alt={dish.name} />
                                <h3>Food Pairing:</h3>
                                <ul>
                                    {dish.food_pairing.map((pairing) => (
                                        <li key={pairing}>{pairing}</li>
                                    ))}
                                </ul>
                                {/*<ButtonAddToFavorite*/}
                                {/*    beer={dish}*/}
                                {/*    beerHandler={addToDishFavorites}*/}
                                {/*/>*/}
                            </div>
                        ))}
                </span>
            </div>
        </main>
    );
}

export default Home;
