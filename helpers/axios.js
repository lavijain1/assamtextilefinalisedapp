import axios from 'axios';
import { baseapi } from '../apiconfig';

export const axiosnew = axios.create({
    baseURL: baseapi,
  
})

