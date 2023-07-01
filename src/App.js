import { useState } from 'react';
import './App.css';

function App() {
	const [likes, setLikes] = useState(0);

	function increment() {
		setLikes(likes + 1)
	}

	function decrement() {
		setLikes(likes - 1)
	}

	return (
		<div className="App">
			<h1>Likes: {likes}</h1>
			<button onClick={increment}>Increase</button>
			<button onClick={decrement}>Decrease</button>
			
		</div>
	);
}

export default App;
