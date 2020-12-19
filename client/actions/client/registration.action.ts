import { axiosInstance } from './../index';
 

// TODO: the succes resoibse in 400
export const postRegistration = async (data) => {
    return await axiosInstance
        .post(`/auth/register`, data)
        .then(res => {
            return {
                ...res.data,
                accessToken: res.headers.accesstoken,
                refreshToken: res.headers.refreshtoken,
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