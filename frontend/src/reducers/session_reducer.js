import { RECEIVE_CURRENT_TEACHER } from "../actions/teachers";

const sessionReducer = (oldState, action) => {
	if (!oldState) {
		oldState = {};
	}
	Object.freeze(oldState);

	let newState = Object.assign({}, oldState);
	switch (action.type) {
		case RECEIVE_CURRENT_TEACHER:
			Object.assign(newState, action.payload.data.teachers);
			return newState;
		default:
			return oldState;
	}
};

export default sessionReducer;
