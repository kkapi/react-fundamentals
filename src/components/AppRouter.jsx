import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import PostPage from '../pages/PostPage';
import Posts from '../pages/Posts';

const AppRouter = () => {
	return (
		<Routes>
			<Route path="*" element={<About />} />
			<Route path="/posts" element={<Posts />} />
			<Route path="/about" element={<About />} />
			<Route path="/posts/:id" element={<PostPage />} />
		</Routes>
	);
};

export default AppRouter;
