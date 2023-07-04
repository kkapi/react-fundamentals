import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

const PostItem = ({ post, number, remove }) => {
	const navigate = useNavigate();

	return (
		<div className="post">
			<div className="post__content">
				<strong>
					{number}. {post.title}
				</strong>
				<div>{post.body}</div>
			</div>
			<div className="post_butns">
				<MyButton onClick={() => remove(post)}>Удалить</MyButton>
				<MyButton onClick={() => navigate(`/posts/${post.id}`)}>
					Открыть
				</MyButton>
			</div>
		</div>
	);
};

export default PostItem;
