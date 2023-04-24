import { useLocation } from 'react-router-dom';

const SearchDetails = () => {

    let location = useLocation();

    return (
        <div className='search-details'>
            <img src={location.state.sprites.other.dream_world.front_default} alt='image of pokemon' />
            <h2>{location.state.name}</h2>
            <h5>Type:</h5>
            <p>{location.state.types.type}</p>
            {location.state.types.map((elt) => {
                return (
                    <p>{elt.type.name}</p>
                )
            })}
            <p>HP: {location.state.stats[0].base_stat}</p>
            <p>Attack: {location.state.stats[1].base_stat}</p>
            <p>Defense: {location.state.stats[2].base_stat}</p>
            <p>Speed: {location.state.stats[5].base_stat}</p>
        </div>
    );
}

export default SearchDetails;