const axios = require('axios').default;


const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api/client`,
    timeout: 3000
});




export const postTestEmail = async (data) => {
    return await axiosInstance
        .post(`${process.env.BASE_API_URL}/api/client/test/`, data)
        .then(res => { return res.data.insertedObject })
        .catch(err => console.log(err));
}


export const getTest = async () => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/client/test`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}

