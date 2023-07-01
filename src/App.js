import { useRef, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript1', body: 'Description' },
		{ id: 2, title: 'JavaScript2', body: 'Description' },
		{ id: 3, title: 'JavaScript3', body: 'Description' },
		{ id: 4, title: 'JavaScript4', body: 'Description' },
		{ id: 5, title: 'JavaScript5', body: 'Description' },
	]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post) => {
		setPosts(posts.filter(p => post.id !== p.id))
	}

	return (
		<div className="App">
			<PostForm create={createPost} />
			<PostList remove={removePost} posts={posts} title={'Спиок постов 1'} />
		</div>
	);
}

export default App;

//Некотролируемый компонент
// const bodyInputRef = useRef();

{
	/* Неуправляемый/Неконтролируемый компонент
				<MyInput
					ref={bodyInputRef}
					type="text"
					placeholder="Описание поста"
				/> */
}
