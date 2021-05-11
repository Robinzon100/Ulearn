import { axiosInstance } from "actions/action.index";




export const getCourse = async (uuid) => {
    return await axiosInstance
      .get(`/course/${uuid}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };
