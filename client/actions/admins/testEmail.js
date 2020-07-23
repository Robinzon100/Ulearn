const axios = require('axios').default;


const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api/admin`,
    timeout: 3000
});



// ------------ TESTEMAILS ACTIONS --------------

export const getTestEmail = async () => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/admin/test_email`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}



export const deleteTestEmail = async (testEmailId) => {
    return await axiosInstance
        .delete(`${process.env.BASE_API_URL}/api/admin/test_email/${testEmailId}`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}








