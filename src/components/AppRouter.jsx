import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router';
import MyLoader from './UI/loader/MyLoader';

const AppRouter = () => {
	const { isAuth, setIsAuth, isLoading } = useContext(AuthContext);

	if (isLoading) {
		return <MyLoader />;
	}

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
