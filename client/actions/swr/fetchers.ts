import Axios from 'axios';
import { axiosInstance } from '../client/registration.actions';




export const fetcher = url => axiosInstance.get(url).then(res => res.data)
