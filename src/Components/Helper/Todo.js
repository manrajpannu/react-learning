import React from 'react';

export default function Todo({ id, description, completed, deleteTodo }) {
	const isDone = { textDecoreaction: 'line-through' };
	return (
		<div>
			<h3>
				<span style={completed ? isDone : {}}>{description}</span>
				<button
					onClick={() => {
						deleteTodo(id);
					}}
					style={{ marginLeft: '10px', float: 'right' }}
				>
					X
				</button>
				<button style={{ marginLeft: '10px', float: 'right' }}>Done</button>
			</h3>
		</div>
	);
}
//style={{ float: 'right' }}
