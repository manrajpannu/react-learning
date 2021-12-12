import React from 'react';

export default function User(props) {
	return (
		<div
			style={{
				display: 'inline-block',
				textAlign: 'center',
				maxWidth: '300px',
			}}
		>
			<div
				style={{
					fontSize: '12px',
					borderRadius: '10px',
					margin: '10px',
					backgroundColor: 'lightgray',
				}}
			>
				<div style={{ padding: '10px' }}>
					<img src={props.picture.medium} alt='' />
					<p>
						<span style={{ paddingRight: '3px' }}>{props.name.first}</span>
						{props.name.last}
					</p>

					<p>{props.email}</p>
				</div>
			</div>
		</div>
	);
}
