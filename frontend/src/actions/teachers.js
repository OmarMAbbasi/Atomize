import * as TeacherAPIUtils from "../util/teacher_api_utils";


export const RECEIVE_CURRENT_TEACHER = "RECEIVE_CURRENT_TEACHER";

const receiveCurrentTeacher = payload => ({
	type: RECEIVE_CURRENT_TEACHER,
	payload
});

export const getCurrentTeacher = data => dispatch => {
	return TeacherAPIUtils.getCurrentTeacher(data)
		.then(payload => dispatch(receiveCurrentTeacher(payload)))
		.catch(err => console.log(err));
};
