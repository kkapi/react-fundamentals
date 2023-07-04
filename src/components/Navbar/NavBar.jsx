import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Navbar.module.css';

const NavBar = () => {
	return (
		<div className={cl.navbar}>
			<Link to={'/about'}>About</Link>
			<Link to={'/posts'}>Posts</Link>
			<div>test</div>
		</div>
	);
};

export default NavBar;
