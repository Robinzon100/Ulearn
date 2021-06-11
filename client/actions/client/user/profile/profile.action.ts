import { axiosInstance } from 'actions/action.index';





export const getUser = async (accessToken) => {
    return await axiosInstance
        .get(`/user/profile`, {
            headers: {
                auth_access_token: `${accessToken}`
            },
        })
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




export const updateUserProfile = async (data?, accessToken?) => {
    return await axiosInstance
        .patch(`/user/profile`, data, {
            headers: {
                auth_access_token: `${accessToken}`,
            }
        })
        .then(res => {
            return {
                ...res.data,
                accessToken: res.headers['auth-access_token'],
                refreshToken: res.headers['auth-refresh_token'],
                expiration: res.headers['auth-token_expiration'],
                statusCode: res.status,
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