import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.BASE_API_URL}/api/client`,
  timeout: 3000,
});

export const getTabContent = async (courseId, tabRoute) => {
  return await axiosInstance
    .get(
      `${process.env.BASE_API_URL}/api/client/course/${courseId}/${tabRoute}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
