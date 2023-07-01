import { useState } from 'react';
import PostItem from './components/PostItem';
import './styles/App.css';

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript1', body: 'Description'},
		{id: 2, title: 'JavaScript2', body: 'Description'},
		{id: 3, title: 'JavaScript3', body: 'Description'},
		{id: 4, title: 'JavaScript4', body: 'Description'},
		{id: 5, title: 'JavaScript5', body: 'Description'},
	])
	return (
		<div className="App">
			<h1>Список постов</h1>
			{posts.map(post => 
				<PostItem post={post} key={post.id}/>
			)}
		</div>
	);
}

export default App;
