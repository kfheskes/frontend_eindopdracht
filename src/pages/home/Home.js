import React, {useEffect, useState} from "react";
import SearchBeer from "../../components/SearchBeer/SearchBeer";
import axios from "axios";
import SearchDish from "../../components/searchDish/SearchDish";
import ResultBeer from "../../components/ResultBeer/ResultBeer";
import ResultDish from "../../components/ResultDish/ResultDish";
import trashyBlond from '../../assets/Beer brewdog-trashy-blonde.jpg';
import magicStoneDog from '../../assets/Beer Magic Stone Dog.jpg'
import electricIndia from '../../assets/Beer-electric-india.png'
import './Home.css'

function Home() {
    const [descriptionBeer, setDescriptionBeer] = useState("");
    const [descriptionDish, setDescriptionDish] = useState("");
    const [beerData, setBeerData] = useState([]);
    const [dishData, setDishData] = useState([]);
    const [error, setError] = useState(false);
    const [errorDish, setErrorDish] = useState(false);
    const [searchResult, setSearchResult] = useState(false)


    useEffect(() => {
        const controller = new AbortController();

        async function fetchDataBeer() {
            setError(false);
            setDescriptionDish("")
            setDishData([]);
            try {
                const result = await axios.get(
                    `https://api.punkapi.com/v2/beers?beer_name=${descriptionBeer}`
                );
                console.log(result.data);
                setBeerData(result.data);
                setSearchResult(true);
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

        if (descriptionBeer) {
            fetchDataBeer();
        }
        return function cleanup() {
            controller.abort();
        };
    }, [descriptionBeer]);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchDataDish() {
            setErrorDish(false);
            setDescriptionBeer("");
            setBeerData([]);
            try {
                const result = await axios.get(
                    `https://api.punkapi.com/v2/beers?food=${descriptionDish}`
                );
                console.log(result.data);
                setDishData(result.data);
                setSearchResult(true);
                if (result.data.length === 0) {
                    setErrorDish(true);
                } else {
                    setErrorDish(false);
                }
            } catch (e) {
                console.error(e);
                setErrorDish(true);
            }
        }

        if (descriptionDish) {
            fetchDataDish();
        }
        return function cleanup() {
            controller.abort();
        };
    }, [descriptionDish]);


    return (
        <main className="outer-container">
            <div className="inner-container">

                {error && (
                    <span className="wrong-beer-error">Oh! Unknown beer try again</span>
                )}{errorDish && (
                <span className="wrong-beer-error">Oh! Unknown dish try again</span>
            )}

                <div className="search-container">
                    <SearchBeer setBeerHandler={setDescriptionBeer}/>
                    <SearchDish setDishHandler={setDescriptionDish}/>
                </div>
                {!searchResult &&
                    <div className="beer_img_home">
                        <img className='trashy-blond' src={trashyBlond} alt='Trashy Blonde'/>
                        <img className='magic-stone-dog' src={magicStoneDog} alt='Magic Stone Dog'/>
                        <img className='electric-india' src={electricIndia} alt='Electric India'/>
                    </div>
                }

                <span>
                    {beerData.length > 0 &&
                        beerData.map((beer) => (
                            <div key={beer.id}>
                                <ResultBeer beer={beer}/>
                            </div>
                        ))}
                </span>

                <span>
                    {dishData.length > 0 &&
                        dishData.map((beer) => (
                            <div key={beer.id}>
                                <ResultDish beer={beer}/>
                            </div>
                        ))
                    }
                </span>
            </div>
        </main>
    );
}

export default Home;
