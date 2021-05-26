import { axiosInstance } from "actions/action.index";



export const getAllCourseVideos = async () => {
  return await axiosInstance
    .get(`/course/landing_courses/all`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};