import axios from './config'

export const getVCcode = (params = {}) => {
    return axios.get('/aerospace/auth/token');
}