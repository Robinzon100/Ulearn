import Axios from 'axios';
import { axiosInstance } from './../index';
 


export const fetcher = url => axiosInstance.get(url).then(res => res.data)
