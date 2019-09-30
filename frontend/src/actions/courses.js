import * as CourseAPIUtils from '../util/course_api_utils';

//!Get Course
export const RECEIVE_COURSE = "RECEIVE_COURSE";

export const receiveCourse = payload => ({
  type: RECEIVE_COURSE,
  payload
});

export const fetchCourse = data => dispatch => (
  CourseAPIUtils.getCourse(data)
    .then(payload => dispatch(receiveCourse(payload)))
    .catch(err => console.log(err))
);


//! Create Course
export const CREATE_NEW_COURSE = "CREATE_NEW_COURSE";

export const createCourse = payload => ({
  type: CREATE_NEW_COURSE,
  payload
});

export const newCourse = data => dispatch => (
  CourseAPIUtils.postCourse(data)
    .then(payload => dispatch(createCourse(payload)))
    .catch(err => console.log(err))
);


//! Edit/Update Course
export const UPDATE_COURSE = "UPDATE_COURSE";

export const updateCourse = payload => ({
  type: UPDATE_COURSE,
  payload
});

export const editCourse = data => dispatch => (
  CourseAPIUtils.patchCourse(data)
    .then(payload => dispatch(updateCourse(payload)))
    .catch(err => console.log(err))
);


//!Destroy/Delete Course
export const DESTORY_COURSE = "DESTORY_COURSE";

export const destroyCourse = payload => ({
  type: DESTORY_COURSE,
  payload
});

export const deleteCourse = data => dispatch => (
  CourseAPIUtils.deleteCourse(data)
    .then(payload => dispatch(destroyCourse(payload)))
    .catch(err => console.log(err))
);

