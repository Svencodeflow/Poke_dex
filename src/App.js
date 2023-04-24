import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Details from './components/Details';
import SearchList from './components/SearchList';
import SearchDetails from './components/SearchDetails';
import Header from './components/Header';



function App() {
	return (
		<div className="App">
			<Header />
			<Routes >
				<Route path='/' element={<Home />} />
				<Route path='/details' element={<Details />} />
				<Route path='/search' element={<SearchList />} />
				<Route path='/searchdetails' element={<SearchDetails />} />
			</Routes>
		</div>
	);
}

export default App;