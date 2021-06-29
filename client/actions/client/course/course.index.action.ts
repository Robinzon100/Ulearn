import { axiosInstance } from "actions/action.index";




export const getCourse = async (uuid) => {
  return await axiosInstance
    .get(`/course/${uuid}`)
    .then((res) => {
      return {
        ...res.data,
        statusCode: res.status
      };
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
};



export const getCourseComments = async ({ data, auth_access_token }) => {
  return await axiosInstance
    .get(`/comments/${data}`, {
      headers: {
        auth_access_token: auth_access_token
      }
    })
    .then((res) => {
      return {
        ...res.data,
        statusCode: res.status
      };
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
};



export const postComment = async ({ data, auth_access_token }) => {
  return await axiosInstance
    .post(`/comments/${data.courseId}`,
      data.comment,
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







export const getCoursesByUrlFilter = async (params: any[]) => {
  let paramString = ''
  params.map(param => {
    paramString += '/' + param
  })

  return await axiosInstance
    .post(`/course/filter${paramString}`)
    .then((res) => {
      return {
        ...res.data,
        statusCode: res.status
      };
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
};



