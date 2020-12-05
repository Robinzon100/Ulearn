const axios = require('axios').default;

import { axiosInstance } from './../index';

 
export const getAllCategories = async () => {
    return await axiosInstance
        .get(`/categories/all`)
        .then(res => {  
            return res.data 
        })
        .catch(err => console.log(err));
}