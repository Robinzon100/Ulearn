import { axiosInstance } from 'actions/action.index';





export const userCoursesLike = async ({ data, auth_access_token } ) => {
    // console.log(id);
    
    return await axiosInstance
        .post(`/user/course/addToLiked/${data.isLiked}`,
            {
                liked_course_id: +data.id
            },
            {
                headers: {
                    auth_access_token: `${auth_access_token}`
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