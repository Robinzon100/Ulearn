
const axios = require('axios').default;



const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api/client`,
    timeout: 3000
});


export const getAllCategories = async () => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/categories/all`)
        .then(res => { 
            console.log(res.data)
            return res.data 
        })
        .catch(err => console.log(err));
}