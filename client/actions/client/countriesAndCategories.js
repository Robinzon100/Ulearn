const axios = require('axios').default;


const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api/client`,
    timeout: 3000
});



export const getProductCategoriesAndCountries = async () => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/client/product/countries-and-categories`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}
