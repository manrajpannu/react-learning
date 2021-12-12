import React, { useEffect, useState } from 'react';
import User from './Helper/User';
import axios from 'axios';

export default function UserData() {
	const [UsersData, setUsersData] = useState([]);

	useEffect(() => {
		axios
			.get('https://randomuser.me/api/?results=5')
			.then((res) => {
				console.log();
				setUsersData(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	console.log(UsersData);
	return (
		<div>
			<h1>User Data</h1>
			{UsersData.map((user) => (
				<User name={user.name} email={user.email} picture={user.picture} />
			))}
		</div>
	);
}
