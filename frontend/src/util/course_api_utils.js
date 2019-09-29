import axios from 'axios';

export const getCourses = (data) => {
    return axios.get('/api/courses', data)
};

export const getCourse = (data) => {
    return axios.get(`/api/courses/${data._id}`, data)
};

export const postCourse = (data) => {
    return axios.post(`api/courses`, data)
}

export const patchCourse = (data) => {
    return axios.patch(`api/courses`, data)
}

export const deleteCourse = (data) => {
    return axios.delete(`api/courses`, data)
}