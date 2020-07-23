const axios = require('axios').default;


const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api/admin`,
    timeout: 3000
});



// ------------ TEST ACTIONS --------------

export const postTest = async (data) => {
    return await axiosInstance
        .post(`${process.env.BASE_API_URL}/api/admin/test`, data)
        .then(res => { return res.data.insertedObject })
        .catch(err => console.log(err));
}

// export const updateTest = async (data, updateObjectId) => {
//     return await axiosInstance
//         .put(`${process.env.BASE_API_URL}/api/admin/test/${updateObjectId}`, data)
//         .then(res => { return res.data })
//         .catch(err => console.log(err));
// }




export const getTest = async () => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/admin/test`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}


// export const getSingleTest = async (testId) => {
//     return await axiosInstance
//         .get(`${process.env.BASE_API_URL}/api/admin/test/${testId}`)
//         .then(res => { return res.data })
//         .catch(err => console.log(err));
// }



export const deleteTest = async (testId) => {
    return await axiosInstance
        .delete(`${process.env.BASE_API_URL}/api/admin/test/${testId}`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}








