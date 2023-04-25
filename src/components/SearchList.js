import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import normal from '../images/icons/normal.png'
import electric from '../images/icons/electric.png'
import fighting from '../images/icons/fighting.png'
import ground from '../images/icons/ground.png'
import ice from '../images/icons/ice.png'
import poison from '../images/icons/poison.png'
import psychic from '../images/icons/psychic.png'
import rock from '../images/icons/rock.png'
import water from '../images/icons/water.png'
import fire from '../images/icons/fire.png'
import grass from '../images/icons/grass.png'
import bug from '../images/icons/bug.png'
import ghost from '../images/icons/ghost.png'
import unknown from '../images/icons/unknown.png'
import flying from '../images/icons/fyling.png'
import dragon from '../images/icons/dragon.png'
import steel from '../images/icons/steel.png'
import fairy from '../images/icons/fairy.png'
import dark from '../images/icons/dark.png'

const SearchList = () => {

    const location = useLocation()
    console.log(location);

    const url = location.state[0].species.url;
    const [description, setDescription] = useState("");

    useEffect(() => {
        fetch(`${url}`)
            .then(res => res.json())
            .then(json => {
                setDescription(json.flavor_text_entries[1].flavor_text);
            })
    }, [url])


    return (
        <div className='details-container'>
            <div className='img-container'>
                <img className='imgPokemon_details' src={location.state[0].sprites.other.dream_world.front_default} alt='Pokemon' />
            </div>
            <h2 className='details_name'>{location.state[0].name}</h2>
            <div className='type'>
                {location.state[0].types.map(type => {
                    if (type.type.name === 'normal') {
                        console.log('Pokemon Typ: Normal')
                        return (
                            <img src={normal} alt="" />
                        )
                    } else if (type.type.name === 'fire') {
                        console.log('Pokemon Typ: Feuer')
                        return (
                            <img src={fire} alt="" />
                        )
                    } else if (type.type.name === 'water') {
                        console.log('Pokemon Typ: Wasser')
                        return (
                            <img src={water} alt="" />
                        )
                    } else if (type.type.name === 'electric') {
                        console.log('Pokemon Typ: Elektro')
                        return (
                            <img src={electric} alt="" />
                        )
                    } else if (type.type.name === 'grass') {
                        console.log('Pokemon Typ: Pflanze')
                        return (
                            <img src={grass} alt="" />
                        )
                    } else if (type.type.name === 'flying') {
                        console.log('Pokemon Typ: Flug')
                        return (
                            <img src={flying} alt="" />
                        )
                    } else if (type.type.name === 'bug') {
                        console.log('Pokemon Typ: Käfer')
                        return (
                            <img src={bug} alt="" />
                        )
                    } else if (type.type.name === 'poison') {
                        console.log('Pokemon Typ: Gift')
                        return (
                            <img src={poison} alt="" />
                        )
                    } else if (type.type.name === 'rock') {
                        console.log('Pokemon Typ: Gestein')
                        return (
                            <img src={rock} alt="" />
                        )
                    } else if (type.type.name === 'ground') {
                        console.log('Pokemon Typ: Boden')
                        return (
                            <img src={ground} alt="" />
                        )
                    } else if (type.type.name === 'fight') {
                        console.log('Pokemon Typ: Kampf')
                        return (
                            <img src={fighting} alt="" />
                        )
                    } else if (type.type.name === 'ice') {
                        console.log('Pokemon Typ: Eis')
                        return (
                            <img src={ice} alt="" />
                        )
                    } else if (type.type.name === 'psychic') {
                        console.log('Pokemon Typ: Psycho')
                        return (
                            <img src={psychic} alt="" />
                        )
                    } else if (type.type.name === 'ghost') {
                        console.log('Pokemon Typ: Geist')
                        return (
                            <img src={ghost} alt="" />
                        )
                    } else if (type.type.name === 'dragon') {
                        console.log('Pokemon Typ: Drache')
                        return (
                            <img src={dragon} alt="" />
                        )
                    } else if (type.type.name === 'fairy') {

                        return (
                            <img src={fairy} alt="Pokemon Type: Fairy" />
                        )
                    } else if (type.type.name === 'steel') {

                        return (
                            <img src={steel} alt="Pokemon Type: Steel" />
                        )
                    } else if (type.type.name === 'dark') {

                        return (
                            <img src={dark} alt="Pokemon Type: Dark" />
                        )
                    } else {
                        console.log('Legendary Pokemon?!?!')
                        return (
                            <img src={unknown} alt="Pokemon Type: Unknown" />
                        )
                    }
                })}
            </div>

            <div className='info'>
                <div className='stats'>
                    <p>HP: </p> <p>{location.state[0].stats[0].base_stat}</p>
                </div>
                <div className='stats'>
                    <p>Attack: </p> <p> {location.state[0].stats[1].base_stat}</p>
                </div>
                <div className='stats'>
                    <p>Defense: </p> <p> {location.state[0].stats[2].base_stat}</p>
                </div>
                <div className='stats'>
                    <p>Speed: </p> <p> {location.state[0].stats[5].base_stat}</p>
                </div>
            </div>
            <div className='description'>
                <p className='description-p'>"{description}"</p>
            </div>
        </div>
    );
}

export default SearchList;