import React, { useState, useEffect } from 'react';
import PokemonLogo from '../images/pokemon_logo.png';
import PokeBall from '../images/pokeball.png';
import Filter from './Filter';
import { Link } from 'react-router-dom';

const Navbar = () => {


    const [message, setMessage] = useState('')

    const target = (e) => {
        setMessage(e.target.value)
    }

    // let value = message

    // console.log(value);

    const [search, setSearch] = useState([]);


    // console.log(search);

    const something = (event) => {
        if (event.key === 'Entmer') {
            value = message
            fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
                .then(res => res.json())
                .then(data =>
                    setSearch([data]))
        }
        else {
            console.log('error')
        }
    }


    const [light, setLight] = useState(true);

    const toggle = () => {
        setLight(!light);
        if (light) {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        } else {
            document.body.style.backgroundColor = 'grey';
            document.body.style.color = 'white';
        }
    }


    // Dropdown Menu

    const [pokeType, setPokeType] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type/')
            .then(res => res.json())
            .then(json => {
                setPokeType(json.results)
            })
    }, [])


    const [selectedType, setSelectedType] = useState('');

    // handleChange gives back event = choosen <option> and sets the selectedType to the value of <option> (elt.url)

    const handleChange = (event) => {
        setSelectedType(event.target.value)
    }

    const [filteredPokemon, setFilteredPokemon] = useState([]);

    useEffect(() => {
        // fetch(`https://pokeapi.co/api/v2/type/${selectedType}`) - doesnt work because value starting with i would give out 0 - but type 0 isnt available 
        fetch(`${selectedType}`) // instead fetch selectedType which gives beack url of choosen type
            .then(res => res.json())
            .then(json => {
                setFilteredPokemon(json.pokemon)
            })
    }, [selectedType])


    return (
        <nav className="navbar">
            <style jsx>{`
                .navbar {
                    height: 60px;
                }
                .logo {
                    width: 250px;
                }
                input {
                    width: 200px;
                    height: 30px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 0 10px;    
                }
                .searchbar img {
                    width: 30px;
                    position: relative;
                    top: 8px;
                    left: 5px;
                }
                h1:first-letter {
                    text-transform: uppercase;
                }
                img {
                    width: 10%;
                }
            `}</style>


            <img src={PokemonLogo} alt="logo" className="logo" />
            <div className='searchbar'>
                <select name="type" id="" onChange={handleChange}>
                    <option></option>
                    {pokeType.map((elt, i) => {
                        // fix value - type must be equal with value (see elt.url) - 
                        return (
                            <option key={i} value={elt.url}>{elt.name}</option>
                        )
                    })}
                </select>
                <Link to="/filter" onClick={handleChange}></Link>
                <input type="text" value={message} onChange={target} placeholder="Search" onKeyDown={something} />
                <img src={PokeBall} alt="pokeball" onClick={toggle} />
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
            {/* {search.map((pokemon)s => (
                <div key={pokemon.id}>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt="pokemon" />
                    <div>
                        <h2>Stats</h2>
                        <ul>
                            {pokemon.stats.map((stats) => (
                                <p key={stats.stat.name}>{stats.stat.name}: {stats.base_stat}</p>
                            ))}
                        </ul>
                        <h2>Type</h2>
                        <ul>
                            {pokemon.types.map((types) => (
                                <p key={types.type.name}>{types.type.name}</p>
                            ))}
                        </ul>
                    </div>
                </div>
            ))} */}
        </nav>
    );

}

export default Navbar;
