// NOTE: When you change the value of 'time', also change time on css toast animation
const time = 1500;

export const showAddToast = () => {
	const addToast = document.querySelector('#add-toast');
	addToast.className = 'show toast';
	setTimeout(() => {
		addToast.className = addToast.className.replace('show', '');
	}, time);
};

export const showDeleteToast = () => {
	const deleteToast = document.querySelector('#delete-toast');
	deleteToast.className = 'show toast';
	setTimeout(() => {
		deleteToast.className = deleteToast.className.replace('show', '');
	}, time);
};

export const showUpdateToast = () => {
	const updateToast = document.querySelector('#update-toast');
	updateToast.className = 'show toast';
	setTimeout(() => {
		updateToast.className = updateToast.className.replace('show', '');
	}, time);
};
