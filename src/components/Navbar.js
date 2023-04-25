import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PokeBall from '../images/pokeball.png';
import Filter from './Filter';
import EmptyComponent from './EmptyComponent';

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


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetch(`https://pokeapi.co/api/v2/pokemon/${message}/`)
                .then(res => res.json())
                .then(data =>
                    setSearch([data]))
        }
    }

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
                <select className='select' name='type' id='' onChange={handleChange}>
                    <option>Select Type</option>
                    {pokeType.map((elt, i) => {
                        return (
                            <option key={i} value={elt.url}>{elt.name}</option>
                        )
                    })}
                </select>

                <input className='inputText' type='text' onChange={handleMessage} placeholder="Search" onKeyDown={handleKeyDown} state={search} />
                <Link to='/search' state={search} className='submit' >Submit</Link>
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
            {(selectedType.length !== 0 && filteredPokemon.length === 0) && (
                <EmptyComponent />
            )}
        </nav>
    );
}

export default Navbar;
