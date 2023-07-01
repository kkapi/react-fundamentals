import { useState } from 'react';
import './App.css';

function App() {
	const [likes, setLikes] = useState(0);
	const [value, setValue] = useState('');

	function increment() {
		setLikes(likes + 1);
	}

	function decrement() {
		setLikes(likes - 1);
	}

	return (
		<div className="App">
			<h1>Likes: {likes}</h1>
			<button onClick={increment}>Increase</button>
			<button onClick={decrement}>Decrease</button>
			<h1>Value: {value}</h1>
			<input type="text" onChange={event => setValue(event.target.value)} value={value}/>
		</div>
	);
}

export default App;
