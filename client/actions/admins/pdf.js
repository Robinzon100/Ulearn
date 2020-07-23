const axios = require('axios').default;


const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api/admin`,
    timeout: 3000
});



// ------------ PDFS ACTIONS --------------

export const getPdf = async () => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/admin/pdf`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}


export const postPdf = async (data) => {
    return await axiosInstance
        .post(`${process.env.BASE_API_URL}/api/admin/pdf/`, data)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}

export const updatePdf = async (data, updateObjectId) => {
    return await axiosInstance
        .put(`${process.env.BASE_API_URL}/api/admin/pdf/${updateObjectId}`, data)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}




export const getSinglePdf = async (pdfId) => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/admin/pdf/${pdfId}`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}



export const deletePdf = async (pdfId) => {
    return await axiosInstance
        .delete(`${process.env.BASE_API_URL}/api/admin/pdf/${pdfId}`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}








