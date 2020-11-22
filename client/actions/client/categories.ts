
const axios = require('axios').default;



const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api`,
    timeout: 5000
});


export const getAllCategories = async () => {
    return await axios
        .get(`http://localhost:5000/api/categories/all`)
        .then(res => { 
            console.log(process.env.BASE_API_URL)
            return res.data 
        })
        .catch(err => console.log(err));
}