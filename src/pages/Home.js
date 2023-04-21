import { useState, useEffect } from "react";

import HomeItem from "../components/HomeItem";


const Home = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
        .then(res=>res.json())
        .then(json=> {
            setPokemon(json.results);
        })
} , [])

console.log("pokemon", pokemon)

    return (
        <div className="home">
            <style jsx>{`
            html{
                background-color: #E5E5E5;  
            }
            .home {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 5%;
                margin: 10%
            }
            `}
            </style>
        {pokemon.map((elt, i) => {
                return(
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