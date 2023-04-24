import { useLocation } from 'react-router-dom';

const Details = () => {

    let location = useLocation();
    console.log(location.state);

    // console.log(location.state[0].name);

    return (

        <div className='details-container'>

            <div className='img-container'>
            <img src={location.state[0].sprites.other.dream_world.front_default} alt="" />
            </div>
            <h2>{location.state[0].name}</h2>
            {/* <h5>Type:</h5> */}
            {/* <p>{location.state[0].types.type}</p> */}
            <div className='type'>
            {location.state[0].types.map((elt) => {
                return (
                    <p>{elt.type.name}</p>
                )
            })}
            </div>
            <div className='info'>
            <div className='stats'>
            <p>HP:</p><p> {location.state[0].stats[0].base_stat}</p>
            </div>
            <div className='stats'>
            <p>Attack:</p><p> {location.state[0].stats[1].base_stat}</p>
            </div>
            <div className='stats'>
            <p >Defense:</p><p> {location.state[0].stats[2].base_stat}</p>
            </div>
            <div className='stats'>
            <p>Speed:</p><p> {location.state[0].stats[5].base_stat}</p>
            </div>
            </div>
        </div>
    );
}

export default Details;

