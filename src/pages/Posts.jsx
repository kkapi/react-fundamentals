import { useEffect, useRef, useState } from 'react';
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import MyLoader from '../components/UI/loader/MyLoader';
import MyModal from '../components/UI/modal/MyModal';
import MyPagination from '../components/UI/pagination/MyPagination';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePost';
import '../styles/App.css';
import { getPageCount, getPagesArray } from '../utils/pages';

function Posts() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const [pages, setPages] = useState([]);
	const lastElement = useRef();

	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getLimit(limit, page);
		setPosts(response.data);
		const totalCount = response.headers['x-total-count'];
		setPages(getPagesArray(getPageCount(totalCount, limit)));
		setTotalPages(getPageCount(totalCount, limit));
	});

	const createPost = newPost => {
		setPosts([...posts, newPost]);
		setModal(false);
	};

	const removePost = post => {
		setPosts(posts.filter(p => post.id !== p.id));
	};

	useEffect(() => {
		fetchPosts(limit, page);
	}, [page]);

	const callback = (entries, observer) => {
		if (entries[0].isIntersecting) {
			console.log(page);
			setPage(page + 1);
		}
	};

	const options = {
		root: null,
		rootMargin: '0px',
		treshold: 1.0,
	};

	useEffect(() => {
		if (isPostsLoading) return;
		const observer = new IntersectionObserver(callback, options);
		if (lastElement.current) observer.observe(lastElement.current);

		return () => {
			if (lastElement.current) observer.unobserve(lastElement.current);
		};
	}, [isPostsLoading]);

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
				<div>
					<PostList
						remove={removePost}
						posts={sortedAndSearchedPosts}
						title={'Спиcок постов 1'}
					/>
					<div
						ref={lastElement}
						style={{ height: '20px', backgroundColor: 'red' }}
					></div>
				</div>
			)}
			<MyPagination pages={pages} setPage={setPage} page={page} />
		</div>
	);
}

export default Posts;
