import axios from "axios";

//! Testing Purposes
export const getCourses = data => {
	return axios.get("/api/courses", { params: data });
};

export const getCourse = data => {
	return axios.get(`/api/courses/${data._id}`, data);
};

export const postCourse = data => {
	return axios.post(`api/courses`, data);
};

export const patchCourse = data => {
	return axios.patch(`api/courses`, data);
};

export const deleteCourse = ({ teachers, courses }) => {
	return axios.delete(`api/courses`, {
		params: {
			teachers: teachers._id,
			courses: courses._id
		}
	});
};
