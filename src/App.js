import { useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './styles/App.css';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePost';

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

	const [modal, setModal] = useState(false);

	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);	

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => post.id !== p.id));
	};

	return (
		<div className="App">			
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<PostFilter style={{margin: '10px 0'}} filter={filter} setFilter={setFilter} />
			<MyButton onClick={() => setModal(true)}>
				Создать пост
			</MyButton>
			<PostList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title={'Спиcок постов 1'}
			/>
		</div>
	);
}

export default App;