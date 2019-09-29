import axios from 'axios';

export const getCurrentTeacher = () => {
    return axios.get('/api/teachers')
};