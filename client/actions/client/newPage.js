const axios = require('axios').default;


const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api/client`,
    timeout: 3000
});



// ------------ NEWS ACTIONS --------------

export const getNewPagesLinks = async () => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/client/newpage/links`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}


export const getSingleNewPage = async (newPageId) => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/client/newpage/${newPageId}`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}









