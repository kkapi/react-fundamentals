import { useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './styles/App.css';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePost';
import axios from 'axios';

function App() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({
		sort: '',
		query: '',
	});

	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => post.id !== p.id));
	};

	async function fetchPosts() {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
		setPosts(response.data)
	}

	return (
		<div className="App">
			<button onClick={fetchPosts}>GET POST</button>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<PostFilter
				style={{ margin: '10px 0' }}
				filter={filter}
				setFilter={setFilter}
			/>
			<MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
			<PostList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title={'Спиcок постов 1'}
			/>
		</div>
	);
}

export default App;
