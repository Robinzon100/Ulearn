const axios = require('axios').default;


const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api/client`,
    timeout: 3000
});




export const postLogin = async (data) => {
    return await axiosInstance
        .post(`${process.env.BASE_API_URL}/api/client/login/`, data)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}



