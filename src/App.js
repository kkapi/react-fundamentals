import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/Navbar/NavBar';
import { AuthContext } from './context';

const App = () => {
	const [isAuth, setIsAuth] = useState(false);
	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
			}}
		>
			<BrowserRouter>
				<NavBar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	);
};

export default App;
