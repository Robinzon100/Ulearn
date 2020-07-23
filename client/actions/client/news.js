const axios = require('axios').default;


const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api/client`,
    timeout: 12000
});



// ------------ NEWS ACTIONS --------------

export const getNews = async (param) => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/client/news/${param}`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}









