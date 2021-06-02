import { axiosInstance } from 'actions/action.index';





export const  userCoursesLike = async (accessToken) => {
    return await axiosInstance
        .post(`/user/courses/addToLiked`, {
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