import React, { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	const login = event => {
		event.preventDefault();
		setIsAuth(true);
	};

	return (
		<div>
			<h1>Авторизация</h1>
			<form
				onSubmit={login}
				style={{
					display: 'flex',
					flexDirection: 'column',
					marginTop: '10px',
				}}
			>
				<MyInput type="text" placeholder="Введите логин" />
				<MyInput
					style={{ marginBottom: '10px' }}
					type="password"
					placeholder="Введите пароль"
				/>
				<MyButton type="submit">Войти</MyButton>
			</form>
		</div>
	);
};

export default Login;
