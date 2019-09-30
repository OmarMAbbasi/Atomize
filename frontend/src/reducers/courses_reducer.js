import { RECEIVE_CURRENT_TEACHER } from "../actions/teacher";
import { RECEIVE_STUDENT } from "../actions/students";
import {
	RECEIVE_COURSE,
	CREATE_NEW_COURSE,
	UPDATE_COURSE,
	DESTORY_COURSE
} from "../actions/courses";

const coursesReducer = (oldState, action) => {
	if (!oldState) {
		oldState = {};
	}
	Object.freeze(oldState);

	let newState = Object.assign({}, oldState);
	switch (action.type) {
		case RECEIVE_CURRENT_TEACHER:
			Object.assign(newState, action.payload.courses);
			return newState;
		case RECEIVE_STUDENT:
			Object.assign(newState, action.payload.courses);
			return newState;
		case RECEIVE_COURSE:
			Object.assign(newState, action.payload.courses);
			return newState;
		case CREATE_NEW_COURSE:
			Object.assign(newState, action.payload.courses);
			return newState;
		case UPDATE_COURSE:
			Object.assign(newState, action.payload.courses);
			return newState;
		case DESTORY_COURSE:
			Object.assign(newState, action.payload.courses);
			return newState;
		default:
			return oldState;
	}
};

export default coursesReducer;
