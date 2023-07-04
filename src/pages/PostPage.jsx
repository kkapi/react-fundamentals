import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import MyLoader from '../components/UI/loader/MyLoader';
import { useFetching } from '../hooks/useFetching';

const PostPage = () => {
	const params = useParams();

	const [post, setPost] = useState({});

	const [fetchPostbyId, isLoading, error] = useFetching(async id => {
		const response = await PostService.getPostById(id);
		setPost(response.data);
	});

	useEffect(() => {
		fetchPostbyId(params.id);
	}, []);

	return (
		<div>
			<h1>Страница поста {params.id}</h1>
			{isLoading ? (
				<MyLoader />
			) : (
				<div>
					{post.id} {post.title}
				</div>
			)}
		</div>
	);
};

export default PostPage;
