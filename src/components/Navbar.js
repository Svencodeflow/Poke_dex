import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PokeBall from '../images/pokeball.png';
import Filter from './Filter';

const Navbar = () => {

    const [message, setMessage] = useState('')
    const [search, setSearch] = useState([]);
    const [light, setLight] = useState(true);
    const [selectedType, setSelectedType] = useState('');
    const [pokeType, setPokeType] = useState([]);
    const [filteredPokemon, setFilteredPokemon] = useState([]);

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${message}`)
            .then(res => res.json())
            .then(data =>
                setSearch([data]))
    }, [message])

    console.log(search);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetch(`https://pokeapi.co/api/v2/pokemon/${message}/`)
                .then(res => res.json())
                .then(data =>
                    setSearch([data]))
        }
    }
    console.log(message);
    console.log(search);

    // Dropdown Menu
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type/')
            .then(res => res.json())
            .then(json => {
                setPokeType(json.results)
            })
    }, [])

    useEffect(() => {
        fetch(`${selectedType}`)
            .then(res => res.json())
            .then(json => {
                setFilteredPokemon(json.pokemon)
            })
    }, [selectedType])

    const toggle = () => {
        setLight(!light);
        if (light) {
            document.body.style.backgroundColor = '#E5E5E5';
            document.body.style.color = 'black';
        }
        else {
            document.body.style.backgroundColor = 'grey';
            document.body.style.color = 'white';
        }
    }

    const handleChange = (event) => {
        setSelectedType(event.target.value)
    }

    return (
        <nav className='navbar'>
            <div className='searchbar'>
                <select name='type' id='' onChange={handleChange}>
                    <option></option>
                    {pokeType.map((elt, i) => {
                        return (
                            <option key={i} value={elt.url}>{elt.name}</option>
                            // <option key={i} value={elt.url}><Link to={`type/${elt.name}`} state={elt.name}>{elt.name}</Link></option>
                        )
                    })}
                </select>
                <Link to='/search' state={search}>Submit</Link>
                <input type='text' onChange={handleMessage} placeholder="Search" onKeyDown={handleKeyDown} state={search} />
                {/* <input type="text" onChange={handleMessage} placeholder="Search" state={search} /> */}
                <img src={PokeBall} alt='pokeball' onClick={toggle} />
            </div>
            {filteredPokemon.map((elt, j) => {
                return (
                    <div>
                        <Filter
                            name={elt.pokemon.name}
                            key={elt.pokemon.name}
                            id={j + 1}
                        />
                    </div>
                )
            })}
        </nav>
    );
}

export default Navbar;


            // <div key={pokemon.id}>
            //         <h1>{pokemon.name}</h1>
            //         <img src={pokemon.sprites.other.dream_world.front_default} alt="pokemon" />
            //         <div>
            //             <h2>Stats</h2>
            //             <ul>
            //                 {pokemon.stats.map((stats) => (
            //                     <p key={stats.stat.name}>{stats.stat.name}: {stats.base_stat}</p>
            //                 ))}
            //             </ul>
            //             <h2>Type</h2>
            //             <ul>
            //                 {pokemon.types.map((types) => (
            //                     <p key={types.type.name}>{types.type.name}</p>
            //                 ))}
            //             </ul>
            //         </div>
            //     </div>