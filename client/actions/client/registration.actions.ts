
const axios = require('axios').default;


const axiosInstance = axios.create({
    baseURL: `${process.env.BACK_END_URL}/api`,
    timeout: 5000
});


export const postRegistration = async (data) => {
    return await axiosInstance
        .post(`/auth/register`, data)
        .then(res => {
            return {
                ...res.data,
                statusCode: res.status
            }
        })
        .catch(err => {

            if (err.response) {
                return {
                    message: err.response.data.message || err.response.data.error,
                    statusCode: err.response.status
                }
            } else if (err.request) {
                return {
                    message: err.request
                }
            } else {
                return {
                    message: err.message 
                }
            }


        });
}