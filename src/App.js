import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

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
			<button onClick={increment}>Like</button>
			<button onClick={decrement}>Dislike</button>
			<h1>Value: {value}</h1>
			<input type="text" onChange={event => setValue(event.target.value)} value={value}/>
			<Counter />
			<Counter />
		</div>
	);
}

export default App;
