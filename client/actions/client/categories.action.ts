import Axios from 'axios';


export const axiosInstance = Axios.create({
    baseURL: `${process.env.BACK_END_URL}/api`,
    timeout: 5000
});

export const getAllCategories = async () => {
    return await axiosInstance
        .get(`/categories/all`)
        .then(res => {
            return res.data
        })
        .catch(err => console.log(err));
}