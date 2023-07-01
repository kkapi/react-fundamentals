import { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript1', body: 'Description' },
		{ id: 2, title: 'JavaScript2', body: 'Description' },
		{ id: 3, title: 'JavaScript3', body: 'Description' },
		{ id: 4, title: 'JavaScript4', body: 'Description' },
		{ id: 5, title: 'JavaScript5', body: 'Description' },
	]);	

	return (
		<div className="App">
			<form>
				<input type='text' placeholder='Название поста'/>
				<input type='text' placeholder='Описание поста'/>
				<MyButton>Создать</MyButton>
			</form>
			<PostList posts={posts} title={'Спиок постов 1'} />
		</div>
	);
}

export default App;
