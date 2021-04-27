import Axios from 'axios';


export const axiosInstance = Axios.create({
    baseURL: `${process.env.BACK_END_URL}/api`,
    timeout: 5000
});


// export const axiosInstanceAuth = Axios.create({
//     baseURL: `${process.env.BACK_END_URL}/api`,
//     timeout: 5000,
//     auth_access_token: 
// });