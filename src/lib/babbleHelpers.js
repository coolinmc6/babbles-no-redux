export const generateID = () => Math.floor(Math.random()*1000000);

export const timeStamp = () => {
	const monthNames = [
	  "January", "February", "March",
	  "April", "May", "June", "July",
	  "August", "September", "October",
	  "November", "December"
	];

	const date = new Date();
	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();
	const hour = date.getHours();
	const minutes = date.getMinutes();
	const ampm = hour < 12 ? 'am' : 'pm';

	let timestamp = day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hour + ':' + minutes + ampm;

	return timestamp;
}

export const addBabble = (feed, babble) => [...feed, babble]

export const updateTodo = (list, updated) => {
	const updatedIndex = list.findIndex(item => item.id === updated.id)

	// the return statement slices the array from 0 to the item in the array we are updating, 
	// puts in the updated item, 'updated', and then adds the rest of the array using the 
	// spread operator that starts from 1 after the updated array's location to the end
	return [
		...list.slice(0,updatedIndex),
		updated,
		...list.slice(updatedIndex+1)
	]
}