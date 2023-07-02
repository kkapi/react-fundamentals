import { useEffect, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './styles/App.css';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePost';
import PostService from './API/PostService';
import MyLoader from './components/UI/loader/MyLoader';
import { useFetching } from './hooks/useFetching';
import { getPageCount } from './utils/pages';

function App() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getLimit(limit, page);
		setPosts(response.data);
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPageCount(totalCount, limit));
	});

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => post.id !== p.id));
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div className="App">
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<PostFilter
				style={{ margin: '10px 0' }}
				filter={filter}
				setFilter={setFilter}
			/>
			<MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
			{postError && <h1>Произошла ошибка {postError}</h1>}
			{isPostsLoading ? (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '50px',
					}}
				>
					<MyLoader />
				</div>
			) : (
				<PostList
					remove={removePost}
					posts={sortedAndSearchedPosts}
					title={'Спиcок постов 1'}
				/>
			)}
		</div>
	);
}

export default App;
