import './App.css';
import Home from './pages/Home';
import Details from './components/Details';
import SearchList from './components/SearchList'
import Navbar from './components/Navbar'

import { Routes, Route } from 'react-router-dom'

function App() {

	return (
		<div className="App">
			{/* <Navbar /> */}
			<Routes >
				<Route path='/' element={<Home />} />
				<Route path='/details/:id' element={<Details />} />
				<Route path='/search' element={<SearchList />} />
			</Routes>
		</div>
	);
}

export default App;	