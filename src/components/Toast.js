import React from 'react';

const Toast = ({ className, msg }) => {
	return (
		<div id='add-toast' className={className}>
			{msg}
		</div>
	);
};

export default Toast;
