import { RECEIVE_CURRENT_TEACHER } from "../actions/teachers";

import {
	RECEIVE_STUDENT,
	CREATE_NEW_STUDENT,
	UPDATE_STUDENT
} from "../actions/students";
import {
	RECEIVE_COURSE,
	UPDATE_COURSE,
	DESTORY_COURSE
} from "../actions/courses";

const studentsReducer = (oldState, action) => {
	if (!oldState) {
		oldState = {};
	}
	Object.freeze(oldState);

	let newState = Object.assign({}, oldState);

	switch (action.type) {
		case RECEIVE_CURRENT_TEACHER:
			Object.assign(newState, action.payload.data.students);
			return newState;
		case RECEIVE_STUDENT:
			Object.assign(newState, action.payload.data.students);
			return newState;
		case CREATE_NEW_STUDENT:
			Object.assign(newState, action.payload.data.students);
			return newState;
		case UPDATE_STUDENT:
			Object.assign(newState, action.payload.data.students);
			return newState;
		case RECEIVE_COURSE:
			Object.assign(newState, action.payload.data.students);
			return newState;
		case UPDATE_COURSE:
			Object.assign(newState, action.payload.data.students);
			return newState;
		case DESTORY_COURSE:
			Object.assign(newState, action.payload.data.students);
			return newState;

		default:
			return oldState;
	}
};

export default studentsReducer;
