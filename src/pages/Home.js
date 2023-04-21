
import { useState, useEffect } from "react";

import HomeItem from "../components/HomeItem";
import Navbar from '../components/Navbar'

const Home = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
            .then(res => res.json())
            .then(json => {
                setPokemon(json.results);
            })
    }, [])

    console.log("pokemon", pokemon)

    return (
        <div className="home">
            <Navbar />
            {pokemon.map((elt, i) => {
                return (
                    <HomeItem
                        key={i}
                        name={elt.name}
                        myUrl={elt.url}
                    />
                )
            })}
        </div>
    );
}

export default Home;