const axios = require('axios').default;


const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api/admin`,
    timeout: 4000
});



// ------------ PRODUCT ACTIONS --------------

export const postDetaleImage = async (data) => {
    return await axiosInstance
        .post(`${process.env.BASE_API_URL}/api/admin/product_image`, data)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}



export const postProduct = async (data) => {
    return await axiosInstance
        .post(`${process.env.BASE_API_URL}/api/admin/product`, data)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}

export const getProducts = async () => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/admin/product`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}



export const getSingleProduct = async (productId) => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/admin/product/${productId}`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}




export const deleteProduct = async (productId) => {
    return await axiosInstance
        .delete(`${process.env.BASE_API_URL}/api/admin/product/${productId}`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}



export const updateProduct = async (data, updateObjectId) => {
    return await axiosInstance
        .put(`${process.env.BASE_API_URL}/api/admin/product/${updateObjectId}`, data)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}
















