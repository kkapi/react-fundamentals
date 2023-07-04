import React from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

const Login = () => {
	return (
		<div>
			<h1>Авторизация</h1>
			<form
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
