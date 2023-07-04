import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import MyLoader from '../components/UI/loader/MyLoader';
import { useFetching } from '../hooks/useFetching';

const PostPage = () => {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);

	const [fetchPostbyId, isLoading, error] = useFetching(async id => {
		const response = await PostService.getPostById(id);
		setPost(response.data);
	});

	const [fetchComments, isCommentsLoading, commentsError] = useFetching(
		async id => {
			const response = await PostService.getComments(id);
			setComments(response.data);
		}
	);

	useEffect(() => {
		fetchPostbyId(params.id);
		fetchComments(params.id);
	}, []);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'start',
				alignItems: 'center',
			}}
		>
			<h1>Страница поста {params.id}</h1>
			{isLoading ? (
				<MyLoader />
			) : (
				<div>
					{post.id} {post.title}
				</div>
			)}
			<h1>Комментарии</h1>
			{isCommentsLoading ? (
				<MyLoader />
			) : (
				<div>
					{comments.map(comment => (
						<div
							key={comment.id}
							style={{
								margin: '20px 10px',
								border: '1px solid black',
								padding: '8px',
							}}
						>
							<div>id: {comment.id}</div>
							<div>name: {comment.name}</div>
							<div>email: {comment.email}</div>
							<div>body: {comment.body}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default PostPage;
