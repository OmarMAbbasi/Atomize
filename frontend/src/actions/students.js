import * as StudentAPIUtils from "../util/student_api_utils";

//!Get Student
export const RECEIVE_STUDENT = "RECEIVE_STUDENT";

export const receiveStudent = payload => ({
	type: RECEIVE_STUDENT,
	payload
});

export const fetchStudent = data => dispatch =>
	StudentAPIUtils.getStudent(data)
		.then(payload => dispatch(receiveStudent(payload)))
		.catch(err => console.log(err));

//! Create Student
export const CREATE_NEW_STUDENT = "CREATE_NEW_STUDENT";

export const createStudent = payload => ({
	type: CREATE_NEW_STUDENT,
	payload
});

export const newStudent = data => dispatch =>
	StudentAPIUtils.postStudent(data)
		.then(payload => dispatch(createStudent(payload)))
		.catch(err => console.log(err));

//! Edit/Update Student
export const UPDATE_STUDENT = "UPDATE_STUDENT";

export const updateStudent = payload => ({
	type: UPDATE_STUDENT,
	payload
});

export const editStudent = data => dispatch =>
	StudentAPIUtils.patchStudent(data)
		.then(payload => dispatch(updateStudent(payload)))
		.catch(err => console.log(err));
