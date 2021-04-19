import { axiosInstance } from 'actions';


export const getAllCategories = async () => {
    return await axiosInstance
        .get(`/categories/all`)
        .then(res => {
            return res.data
        })
        .catch(err => console.log(err));
}