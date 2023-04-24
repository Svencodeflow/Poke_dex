import { Link } from 'react-router-dom'

import PokemonLogo from '../images/pokemon_logo.png';

const Header = () => {
    return (
        <div>
            <Link to='/'><img src={PokemonLogo} alt='logo' className='logo' /></Link>
        </div>
    );
}

export default Header;