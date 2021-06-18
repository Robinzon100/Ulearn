import { axiosInstance } from "actions/action.index";



export const getAllCourseVideos = async () => {
  return await axiosInstance
    .get(`/course/landing_courses/all`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};



export const getAllUserCourseVideos = async (accessToken?) => {
  return await axiosInstance
    .get(`/course/landing_courses/all`, {
      headers: {
        auth_access_token: `${accessToken}`
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};