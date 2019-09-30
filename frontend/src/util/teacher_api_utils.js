import axios from 'axios';

export const getCurrentTeacher = (data) => {
    return axios.get('/api/teachers')
};
