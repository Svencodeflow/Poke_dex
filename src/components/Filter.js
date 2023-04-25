import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Filter = (props) => {

    const [foundPokemon, setFoundPokemon] = useState({});

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
            .then(res => res.json())
            .then(json => {
                setFoundPokemon(json)
            })
    }, [])

    let styleButton = {
        textDecoration: 'none',
        backgroundColor: 'yellow',
        padding: '5px 15px',
    }

    const isObjEmpty = (foundPokemon) => {
        return Object.keys(foundPokemon).length === 0
    }

    if (isObjEmpty(foundPokemon) === true) {
        return (
            <div>loading</div>
        )
    }
    else {
        return (
            <div>
                <img className='imgPokemon' src={foundPokemon.sprites.other.dream_world.front_default === null ? foundPokemon.sprites.front_default : foundPokemon.sprites.other.dream_world.front_default} alt='of Pokemon' />
                <h2>{props.name}</h2>
                {foundPokemon.types.map((elt) => {
                    return (
                        <p>{elt.type.name}</p>
                    )
                })}
                <Link to='/searchdetails' style={styleButton} state={foundPokemon}>Show Details</Link>
            </div>
        )
    }
}

export default Filter;