import Axios from 'axios';

export const axiosInstance = Axios.create({
    baseURL: `${process.env.BACK_END_URL}/api`,
    timeout: 5000
});


// TODO: the succes resoibse in 400
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

            return {
                message: err.response.data.message || err.response.data.error,
                statusCode: err.response.status
            }
        });
}