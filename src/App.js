import { useRef, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'asasdf', body: 'xfg' },
		{ id: 2, title: 'asdf', body: 'Descrsdfsiption' },
		{ id: 3, title: 'cxv', body: 'xb' },
		{ id: 4, title: 'eret', body: 'sadf' },
		{ id: 5, title: 'aaaaaa', body: 'ghfjfghj' },
	]);

	const [selectedSort, setSelectedSort] = useState('');

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => post.id !== p.id));
	};

	const sortPosts = (sort) => {
		setSelectedSort(sort);
		console.log(sort);
		setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
	};

	return (
		<div className="App">
			<PostForm create={createPost} />
			<hr style={{ margin: '15px 0' }} />
			<div>
				<MySelect
					value={selectedSort}
					onChange={sortPosts}
					defaultValue="Сортировка по"
					option={[
						{ value: 'title', name: 'По названию' },
						{ value: 'body', name: 'По описанию' },
					]}
				/>
			</div>
			{posts.length ? (
				<PostList
					remove={removePost}
					posts={posts}
					title={'Спиок постов 1'}
				/>
			) : (
				<h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
			)}
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
