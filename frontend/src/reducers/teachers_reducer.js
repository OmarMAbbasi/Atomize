import { RECEIVE_CURRENT_TEACHER } from "../actions/teachers";
import { CREATE_NEW_COURSE, DESTORY_COURSE } from "../actions/courses";

const teachersReducer = (oldState, action) => {
	if (!oldState) {
		oldState = {};
	}
	Object.freeze(oldState);

	let newState = Object.assign({}, oldState);
	switch (action.type) {
		case RECEIVE_CURRENT_TEACHER:
			Object.assign(newState, action.payload.teachers);
			return newState;
		case CREATE_NEW_COURSE:
			Object.assign(newState, action.payload.teachers);
			return newState;
		case DESTORY_COURSE:
			Object.assign(newState, action.payload.teachers);
			return newState;
		default:
			return oldState;
	}
};

export default teachersReducer;
