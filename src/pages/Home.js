import { useState, useEffect } from 'react';

import HomeItem from '../components/HomeItem';
import Navbar from '../components/Navbar'

const Home = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
            .then(res => res.json())
            .then(json => {
                setPokemon(json.results);
            })
    }, [])

    return (
        <section>
            <Navbar />
            <div className='home'>
                {pokemon.map((elt) => {
                    return (
                        <HomeItem
                            key={elt.name}
                            name={elt.name}
                            myUrl={elt.url}
                        />
                    )
                })}
            </div>
        </section>
    );
}

export default Home;