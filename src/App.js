import { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'asasdf', body: 'xfg' },
		{ id: 2, title: 'asdf', body: 'Descrsdfsiption' },
		{ id: 3, title: 'cxv', body: 'xb' },
		{ id: 4, title: 'eret', body: 'sadf' },
		{ id: 5, title: 'aaaaaa', body: 'ghfjfghj' },
	]);

	const [filter, setFilter] = useState({
		sort: '',
		query: '',
	});

	const sortedPosts = useMemo(() => {
		return filter.sort
			? [...posts].sort((a, b) =>
					a[filter.sort].localeCompare(b[filter.sort])
			  )
			: posts;
	}, [filter.sort, posts]);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter((post) =>
			post.title.toLowerCase().includes(filter.query)
		);
	}, [filter.query, sortedPosts]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => post.id !== p.id));
	};

	return (
		<div className="App">
			<PostForm create={createPost} />
			<hr style={{ margin: '15px 0' }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			<PostList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title={'Спиок постов 1'}
			/>
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
