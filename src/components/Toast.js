import React from 'react';

const Toast = ({ className, msg, id }) => {
	return (
		<div id={id} className={className}>
			{msg}
		</div>
	);
};

export default Toast;
