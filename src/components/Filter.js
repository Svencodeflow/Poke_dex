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
    }, [props.name])

    // let styleButton = {
    //     textDecoration: 'none',
    //     backgroundColor: 'yellow',
    //     padding: '5px 15px',
    // }

    const isObjEmpty = (foundPokemon) => {
        return Object.keys(foundPokemon).length === 0
    }

    if (isObjEmpty(foundPokemon) === true) {
        return (
            <div></div>
        )
    }
    else {
        return (

            <div className='filter'>
                <div className='filter-item'>
                    <img className='imgPokemon_showDetails' src={foundPokemon.sprites.other.dream_world.front_default} alt='Pokemon' />
                    <h2 className='name_showDetails'>{props.name.slice(0, 1).toUpperCase() + props.name.slice(1)}</h2>
                    {foundPokemon.types.map((elt) => {
                        return (
                            <div className='types_filter'>
                                <p className='type_showDetails'>{elt.type.name.slice(0, 1).toUpperCase() + elt.type.name.slice(1)}</p>
                            </div>
                        )
                    })}
                    <Link to='/searchdetails' state={foundPokemon} className='showDetails_btn' >Show Details</Link>
                </div>
            </div>
        )
    }
}

export default Filter;