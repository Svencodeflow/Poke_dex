import { useLocation } from 'react-router-dom';

const Details = () => {

    let location = useLocation();
    // console.log(location);

    console.log(location.state[0].name);

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

            <img src={location.state[0].sprites.other.dream_world.front_default} alt="" />
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

export default Details;
