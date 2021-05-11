import { axiosInstance } from "actions/action.index";



export const getAllCourseVideos = async () => {
  return await axiosInstance
    .get(`/categories/all`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};