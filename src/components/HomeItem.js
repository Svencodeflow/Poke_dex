import { useState, useEffect } from "react";
import {Link} from "react-router-dom";


const HomeItem = ({myUrl, name, key}) => {

    const [single, setSingle] = useState([]);


    useEffect(() => {
        fetch(myUrl)
        .then(res=>res.json())
        .then(json=> {
            setSingle([json]);
        })
} , [myUrl])



// console.log("single", single)


    return (
        <div className="home-item" >
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
            {single.map((elt) => {
                return(
                    <Link >
                    <img className="imgPokemon" src={elt.sprites.other.dream_world.front_default} alt="img" />
                    <p className="pokename">{name.slice(0, 1).toUpperCase() + name.slice(1)}</p>
                    </Link>
                )
            })}
            {/* <p>{name}</p> */}
        </div>
    );
}

export default HomeItem;