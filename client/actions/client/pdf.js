const axios = require('axios').default;


const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api/client`,
    timeout: 3000
});



// ------------ NEWS ACTIONS --------------

export const getPdf = async (param) => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/client/pdf/${param}`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}









