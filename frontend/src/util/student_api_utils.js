import axios from 'axios';

//! Testing
export const getStudents = (data) => {
    return axios.get('/api/students', data)
};

export const getStudent = (data) => {
    return axios.get(`/api/students/${data._id}`, data)
};

export const postStudent = (data) => {
    return axios.post(`api/students`, data)
}

export const patchStudent = (data) => {
    return axios.patch(`api/students`, data)
}