import React, { useState, useEffect } from 'react';
import Todo from './Helper/Todo';

export default function TodoList() {
	const [inputValue, setInputValue] = useState('');
	const [Todos, setTodos] = useState([]);
	const myTodos = [
		{
			id: 1,
			task: 'do something1',
			completed: false,
		},
		{
			id: 2,
			task: 'do something2',
			completed: false,
		},
		{
			id: 3,
			task: 'do something3',
			completed: false,
		},
		{},
	];

	useEffect(() => {
		setTodos(myTodos);
	}, []);

	function deleteTodo(id) {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	}
	return (
		<div style={{ display: 'inline-block', textAlign: 'center' }}>
			<h1>Todos</h1>
			{/* terinary example
			{Todos.map((todo) =>
				!todo.completed ? (
					<Todo id={todo.id} description={todo.task} />
				) : (
					<div />
				)
			)} */}
			{Todos.map((todo) => {
				if (todo.id) {
					return (
						<Todo
							id={todo.id}
							description={todo.task}
							completed={todo.completed}
							deleteTodo={deleteTodo}
						/>
					);
				}
			})}
			<button
				onClick={() => {
					if (inputValue) {
						setTodos([
							...Todos,
							{
								id: Todos.length + 1,
								task: inputValue,
								completed: false,
							},
						]);
						setInputValue('');
					}
				}}
			>
				add
			</button>
			<input
				type='text'
				value={inputValue}
				onInput={(e) => {
					setInputValue(e.target.value);
				}}
			/>
		</div>
	);
}
