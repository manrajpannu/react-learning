import React, { useState } from 'react';

export default function Todo({
	id,
	description,
	completed,
	deleteTodo,
	markTodo,
}) {
	const [done, setDone] = useState();

	function markIt() {
		if (!done) {
			setDone({ textDecoration: 'line-through' });
		} else {
			setDone();
		}
	}

	return (
		<div>
			<h3>
				<span style={done}>{description}</span>
				<button
					onClick={() => {
						deleteTodo(id);
					}}
					style={{ marginLeft: '10px', float: 'right' }}
				>
					X
				</button>
				<button
					style={{ marginLeft: '10px', float: 'right' }}
					onClick={() => {
						markIt();
					}}
				>
					Done
				</button>
			</h3>
		</div>
	);
}
//style={{ float: 'right' }}
