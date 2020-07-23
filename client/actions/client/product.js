const axios = require('axios').default;


const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api/client`,
    timeout: 3000
});



export const getSingleProduct = async (productId) => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/admin/product/${productId}`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}


export const getProductByCountryAndCategoryId = async (countryId, categoryId) => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/client/product/${countryId}/${categoryId}`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}




export const getProductCategoriesAndCountries = async () => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/client/product/countries-and-categories`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}
