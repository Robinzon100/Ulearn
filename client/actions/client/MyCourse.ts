import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.BASE_API_URL}/api/client`,
  timeout: 3000,
});

export const getTabContent = async (myCourseId) => {
  return await axiosInstance
    .get(
      `${process.env.BASE_API_URL}/api/client/course/${myCourseId}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
