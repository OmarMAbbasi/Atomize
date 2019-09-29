const indexPayload = array =>
	array.reduce((obj, ele) => {
		obj[ele._id] = ele;
		return obj;
	}, {});

module.exports = {
	indexPayload
};
