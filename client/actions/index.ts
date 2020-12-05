import Axios from 'axios';


export const axiosInstance = Axios.create({
    baseURL: `${process.env.BACK_END_URL}/api`,
    timeout: 5000
});