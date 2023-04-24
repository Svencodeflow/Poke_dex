import { useLocation } from 'react-router-dom';

const SearchList = () => {
    const location = useLocation()
    console.log(location);

    return (
        <div className='search-list'>
            <img src={location.state[0].sprites.other.dream_world.front_default} alt='image of pokemon' />
            <h2>{location.state[0].name}</h2>
            <h5>Type:</h5>
            <p>{location.state[0].types.type}</p>
            {location.state[0].types.map((elt) => {
                return (
                    <p>{elt.type.name}</p>
                )
            })}
            <p>HP: {location.state[0].stats[0].base_stat}</p>
            <p>Attack: {location.state[0].stats[1].base_stat}</p>
            <p>Defense: {location.state[0].stats[2].base_stat}</p>
            <p>Speed: {location.state[0].stats[5].base_stat}</p>
        </div>
    );
}

export default SearchList;