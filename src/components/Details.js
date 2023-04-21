import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const [pokemon, setPokemon] = useState([]);
    const {id} = useParams()

    useEffect(()=>{
        fetch(`http://pokeapi.co/api/v2/pokemon/1`)
        .then((res) => res.json())
        .then(data => 
            setPokemon([data]))
    }, [])

    // useEffect(()=>{
    //     fetch(`http://pokeapi.co/api/v2/ability/1`)
    //     .then((res) => res.json())
    //     .then(description => 
    //         setPokemon([description]))
    // }, [])

    console.log(pokemon)
    

    return (
        

        <div>
            <style jsx>{`
            .imgPokemon {
                width: 20vw;
                height: 20vh;
                position: relative;
                z-index: 0;
            }
            .home-item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                background: linear-gradient(35deg, #FFE1C6 4.87%, #FFCB05 94.37%);
                border-radius: 30px;
                position: relative;
                z-index: 0;
                height: 20vh;
                width: 25vw;
            }
            .home-item::before {
                content: "";
                position: absolute;
                bottom: 0;
                height: 24%;
                width: 100%;
                background-color: white;
                border-bottom-left-radius: 30px;
                border-bottom-right-radius: 30px;
                }
            .home-item p {
                padding-bottom: 30px;
                text-decoration: none;
                position: relative;
                z-index: 1;
            }
            a {
                text-decoration: none;
                color: black;
            }
            `}
            </style>


            {pokemon.map((elt, index) => {
                console.log(elt)
                return(

                <div key={index} className='home-item'>
                    <div className='img-card'>
                    <img className='img' src={elt.sprites.other.dream_world.front_default} alt="" />
                    </div>
                    <p className='id'>{elt.id}</p>
                    <h1>{elt.name.toUpperCase().slice(0, 1)}{elt.name.slice(1)}</h1>
                    <div className='type'>
                    <h5>Type:</h5>
                    <p>{elt.types[0].type.name.toUpperCase().slice(0, 1)}{elt.types[0].type.name.slice(1)}</p>
                    <p>{elt.types[1].type.name.toUpperCase().slice(0, 1)}{elt.types[1].type.name.slice(1)}</p>
                    </div>
                    <p>HP: {elt.stats[0].base_stat}</p>
                    <p>Attack: {elt.stats[1].base_stat}</p>
                    <p>Defense: {elt.stats[2].base_stat}</p>
                    <p>Speed: {elt.stats[5].base_stat}</p>
                </div>
                )
            })}
        </div>

    );

}

export default Details;