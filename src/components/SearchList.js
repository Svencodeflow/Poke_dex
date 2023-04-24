import Filter from './Filter'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom';

const SearchList = () => {
    const location = useLocation()
    console.log(location.state);

    return (
        <div className="search-list">
            {/* <Navbar /> */}
            {/* <Filter /> */}
        </div>
    );
}

export default SearchList;