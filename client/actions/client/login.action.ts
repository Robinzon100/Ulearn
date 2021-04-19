import { axiosInstance } from './../index';



export const postLogin = async (data) => {
    return await axiosInstance
        .post(`/auth/login`, data)
        .then(res => {
            return {
                ...res.data,
                accessToken: res.headers['auth-access_token'],
                refreshToken: res.headers['auth-refresh_token'],
                expiration: res.headers['auth-token_expiration'],
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