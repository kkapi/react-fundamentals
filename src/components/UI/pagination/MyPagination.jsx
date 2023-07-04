import React from 'react';
import MyButton from '../button/MyButton';

const MyPagination = ({ pages, setPage, page }) => {
	return (
		<div>
			{pages.map(p => (
				<MyButton
					style={{
						margin: '15px 2px',
						borderColor: p === page ? 'red' : 'teal',
						color: p === page ? 'red' : 'teal',
					}}
					key={p}
					onClick={() => setPage(p)}
				>
					{p}
				</MyButton>
			))}
		</div>
	);
};

export default MyPagination;
