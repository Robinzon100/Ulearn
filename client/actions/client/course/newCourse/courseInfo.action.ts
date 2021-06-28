import { axiosInstance } from 'actions/action.index';



export const postCourseImage = async ({ data, auth_access_token }) => {
    return await axiosInstance
        .post(`/course/new_course/images`,
            data,
            {
                headers: {
                    auth_access_token: `${auth_access_token}`
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









export const deleteCourseImage = async ({ data, auth_access_token }) => {
    return await axiosInstance
        .delete(`/images/delete/${data}`,
            {
                headers: {
                    auth_access_token: `${auth_access_token}`
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



