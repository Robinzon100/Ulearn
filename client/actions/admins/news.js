const axios = require('axios').default;


const axiosInstance = axios.create({
    // baseURL: `${process.env.BASE_API_URL}/api/admin`,
    timeout: 12000,

});



// ------------ NEWS ACTIONS --------------

export const postNews = async (data) => {
    return await axiosInstance
        .post(`${process.env.BASE_API_URL}/api/admin/news`, data)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}

export const updateNews = async (data, updateObjectId) => {
    return await axiosInstance
        .put(`${process.env.BASE_API_URL}/api/admin/news/${updateObjectId}`, data)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}




export const getNews = async () => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/admin/news`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}


export const getSingleNews = async (newsId) => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/admin/news/${newsId}`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}



export const deleteNews = async (newsId) => {
    return await axiosInstance
        .delete(`${process.env.BASE_API_URL}/api/admin/news/${newsId}`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}








