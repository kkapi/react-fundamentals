import { useRef, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript1', body: 'Description' },
		{ id: 2, title: 'JavaScript2', body: 'Description' },
		{ id: 3, title: 'JavaScript3', body: 'Description' },
		{ id: 4, title: 'JavaScript4', body: 'Description' },
		{ id: 5, title: 'JavaScript5', body: 'Description' },
	]);

	const [title, setTitle] = useState('');
	// const bodyInputRef = useRef();

	const addNewPost = (e) => {
		e.preventDefault();		
	};

	return (
		<div className="App">
			<form>
				{/* Управляемый компонент */}
				<MyInput 
					type="text"
					placeholder="Название поста"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				{/* Неуправляемый/Неконтролируемый компонент
				<MyInput
					ref={bodyInputRef}
					type="text"
					placeholder="Описание поста"
				/> */}
				<MyButton type="submit" onClick={addNewPost}>
					Создать
				</MyButton>
			</form>
			<PostList posts={posts} title={'Спиок постов 1'} />
		</div>
	);
}

export default App;
