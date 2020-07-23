const axios = require('axios').default;


const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api/admin`,
    timeout: 3000
});



// ------------ TEST ACTIONS --------------

export const postCategory = async (data) => {
    return await axiosInstance
        .post(`${process.env.BASE_API_URL}/api/admin/category`, data)
        .then(res => { return res.data.insertedObject })
        .catch(err => console.log(err));
}

// export const updateCategory = async (data, updateObjectId) => {
//     return await axiosInstance
//         .put(`${process.env.BASE_API_URL}/api/admin/category/${updateObjectId}`, data)
//         .then(res => { return res.data })
//         .catch(err => console.log(err));
// }




export const getCategories = async () => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/admin/category`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}


// export const getSingleCategory = async (categoryId) => {
//     return await axiosInstance
//         .get(`${process.env.BASE_API_URL}/api/admin/category/${categoryId}`)
//         .then(res => { return res.data })
//         .catch(err => console.log(err));
// }



export const deleteCategory = async (categoryId) => {
    return await axiosInstance
        .delete(`${process.env.BASE_API_URL}/api/admin/category/${categoryId}`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}








