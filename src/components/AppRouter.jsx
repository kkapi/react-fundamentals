import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';

const AppRouter = () => {
	const isAuth = true;
	return (
		<Routes>
			{isAuth &&
				privateRoutes.map(route => (
					<Route path={route.path} element={route.component} />
				))}
			{publicRoutes.map(route => (
				<Route path={route.path} element={route.component} />
			))}
		</Routes>
	);
};

export default AppRouter;
