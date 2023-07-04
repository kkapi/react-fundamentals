import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context';
import MyButton from '../UI/button/MyButton';
import cl from './Navbar.module.css';

const NavBar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth');
	};

	return (
		<div className={cl.navbar}>
			<Link to={'/about'}>About</Link>
			<Link to={'/posts'}>Posts</Link>
			<MyButton style={{ backgroundColor: 'white' }} onClick={logout}>
				Выйти
			</MyButton>
		</div>
	);
};

export default NavBar;
