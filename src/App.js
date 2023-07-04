import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import About from './pages/About';
import Posts from './pages/Posts';

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/posts" element={<Posts />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
