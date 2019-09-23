import axios from 'axios';

import { BASE_URL } from './constants';


export const getGreetings = (url) => axios.get(`${BASE_URL}${url}`);
