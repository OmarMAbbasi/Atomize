import * as TeacherAPIUtils from '../util/teacher_api_utils';

export const RECEIVE_CURRENT_TEACHER = "RECEIVE_CURRENT_TEACHER";

export const receiveCurrentTeacher = payload => ({
  type: RECEIVE_CURRENT_TEACHER,
  payload
});

export const fetchCurrentTeacher = data => dispatch => (
  TeacherAPIUtils.getCurrentTeacher(data)
    .then(payload => dispatch(receiveCurrentTeacher(payload)))
    .catch(err => console.log(err))
);

