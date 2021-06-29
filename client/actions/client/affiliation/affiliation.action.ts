import { axiosInstance } from 'actions/action.index';


export const getAffiliationFromToken = async (token: string, auth_access_token: string) => {
    return await axiosInstance
        .get(`/affiliate/${token}`,
            {
                headers: {
                    auth_access_token: `${auth_access_token}`
                }
            })
        .then(res => {
            return res.data
        })
        .catch(err => console.log(err));
}