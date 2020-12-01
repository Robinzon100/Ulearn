
const axios = require('axios').default;


const axiosInstance = axios.create({
    baseURL: `${process.env.BACK_END_URL}/api`,
    timeout: 5000
});


export const postRegistration = async (data) => {
    return await axiosInstance
        .post(`/auth/register`, data)
        .then(res => {  
            return res.data
        })
        .catch(err => console.log(err));
}