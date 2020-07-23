const axios = require('axios').default;


const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api/admin`,
    timeout: 4000
});



// ------------ NEWPAGE ACTIONS --------------



export const postNewPage = async (data) => {
    return await axiosInstance
        .post(`${process.env.BASE_API_URL}/api/admin/newpage`, data)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}



export const getNewPages = async () => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/admin/newpage`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}



export const getSingleNewPage = async (newPageId) => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/admin/newpage/${newPageId}`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}





// export const postDetaleImage = async (data) => {
//     return await axiosInstance
//         .post(`${process.env.BASE_API_URL}/api/admin/product_image`, data)
//         .then(res => { return res.data })
//         .catch(err => console.log(err));
// }


 



export const updateNewPage = async (data, updateObjectId) => {
    return await axiosInstance
        .put(`${process.env.BASE_API_URL}/api/admin/newpage/${updateObjectId}`, data)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}




export const deleteNewPage = async (newPageId) => {
    return await axiosInstance
        .delete(`${process.env.BASE_API_URL}/api/admin/newpage/${newPageId}`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}
















