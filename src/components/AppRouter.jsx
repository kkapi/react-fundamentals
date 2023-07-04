import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router';

const AppRouter = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	console.log(isAuth);
	return (
		<Routes>
			{isAuth &&
				privateRoutes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={route.component}
					/>
				))}
			{publicRoutes.map(route => (
				<Route
					key={route.path}
					path={route.path}
					element={route.component}
				/>
			))}
		</Routes>
	);
};

export default AppRouter;
