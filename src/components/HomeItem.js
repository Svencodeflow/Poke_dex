import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeItem = ({ myUrl, name, key }) => {

    const [single, setSingle] = useState([]);

    useEffect(() => {
        fetch(myUrl)
            .then(res => res.json())
            .then(json => {
                setSingle([json]);
            })
    }, [myUrl])

    // console.log("single", single)
    return (
        <div className="home-item" >
            {single.map((elt) => {
                // console.log(single);
                return (
                    <Link to={`/details/${elt.id}`} state={single}>
                        <img className="imgPokemon" src={elt.sprites.other.dream_world.front_default} alt="img" />
                        <p className="pokename">{name.slice(0, 1).toUpperCase() + name.slice(1)}</p>
                    </Link>
                )
            })}
        </div>
    );
}

export default HomeItem;