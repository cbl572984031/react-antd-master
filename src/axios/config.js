import axios from 'axios';
import { message } from 'antd';

axios.interceptors.request.use(
    config => {
        if (localStorage.hasOwnProperty('token')) {
            config.headers.token = localStorage.getItem('token')
            return config
        }
        return config
    },
    err => {
        message.error(err);
    }
)

axios.interceptors.response.use(
    response => {
        if (response.data.code !== 100) {
            // message.error(response.data.mesg);
            if (response.data.code === 400 || response.data.code === 401) {
                window.location.hash = '/login'
                localStorage.clear()
                return
            }
        }
        return response
    }
)

export default axios