const axios = require('axios').default;
import getAuthCookies from 'utils/authCookie'

const axiosInstance = axios.create({
    // baseURL: `${process.env.BASE_API_URL}/api/admin`,
    timeout: 3000,
    // headers: {
    //     'auth-token': document.cookie.split('token=')[1]
    // }
});



// ------------ TEST ACTIONS --------------

export const postCountry = async (data) => {
    return await axiosInstance
        .post(`${process.env.BASE_API_URL}/api/admin/country`, data)
        .then(res => { return res.data.insertedObject })
        .catch(err => console.log(err));
}

// export const updateCountry = async (data, updateObjectId) => {
//     return await axiosInstance
//         .put(`${process.env.BASE_API_URL}/api/admin/country/${updateObjectId}`, data)
//         .then(res => { return res.data })
//         .catch(err => console.log(err));
// }




export const getCountries = async () => {
    return await axiosInstance
        .get(`${process.env.BASE_API_URL}/api/admin/country`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}


// export const getSingleCountry = async (countryId) => {
//     return await axiosInstance
//         .get(`${process.env.BASE_API_URL}/api/admin/country/${countryId}`)
//         .then(res => { return res.data })
//         .catch(err => console.log(err));
// }



export const deleteCountry = async (countryId) => {
    return await axiosInstance
        .delete(`${process.env.BASE_API_URL}/api/admin/country/${countryId}`)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}








