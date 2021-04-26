


import { axiosInstance } from 'actions/action.index';
 

// TODO: the succes results in 400
export const getUser = async (accessToken) => {
    return await axiosInstance
        .post(`/auth/register`, {}, {
            headers: {
                auth_access_token: `${accessToken}`
            }
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