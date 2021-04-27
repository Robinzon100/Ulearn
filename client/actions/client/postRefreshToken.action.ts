
import { axiosInstance } from '../action.index';




export const postRefreshToken = async (refreshToken) => {
    return await axiosInstance
        .post(`/auth/refresh_token`, {}, {
            headers: {
                auth_refresh_token: `${refreshToken}`
            }
        })
        .then(res => {
            return {
                accessToken: res.headers['auth-access_token'],
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