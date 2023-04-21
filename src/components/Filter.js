import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Filter = (props) => {

    const [foundPokemon, setFoundPokemon] = useState({});

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
            .then(res => res.json())
            .then(json => {
                setFoundPokemon(json)
                console.log(json);
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

    console.log(isObjEmpty(foundPokemon));


    if (isObjEmpty(foundPokemon) === true) {
        return (
            <div>loading</div>
        )
    }
    else {
        return (
            <div>
                <img className="imgPokemon" src={foundPokemon.sprites.other.dream_world.front_default} alt="" />
                <h2>{props.name}</h2>
                {foundPokemon.types.map((elt) => {
                    return (
                        <p>{elt.type.name}</p>
                    )
                })}
                <Link style={styleButton}>Show Details</Link>
            </div>
        )
    }
}

export default Filter;