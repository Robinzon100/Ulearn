import { axiosInstance } from "actions/action.index";



export const getAllCourseVideos = async () => {
  return await axiosInstance
    .get(`/course/all`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};