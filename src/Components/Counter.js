import { useState } from 'react';
import react from 'react';

function Counter() {
	const [count, setCount] = useState(0);

	const add = () => {
		setCount(count + 1);
	};

	const minus = () => {
		setCount(count - 1);
	};
	console.log(count);
	return (
		<div style={{ display: 'inline-block', textAlign: 'center' }}>
			<h1>Counter App</h1>
			{count}

			<button onClick={add}>+</button>
			<button onClick={minus}>-</button>
		</div>
	);
}

export default Counter;
