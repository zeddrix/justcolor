import React from 'react';
import { useSelector } from 'react-redux';

const Toast = () => {
	const toast = useSelector((state) => state.toastState);

	return (
		<div id={toast.id} className={toast.show ? 'toast show_toast' : 'toast'}>
			{toast.msg}
		</div>
	);
};

export default Toast;
