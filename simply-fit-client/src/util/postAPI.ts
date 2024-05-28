import { useState , ChangeEvent, FormEvent} from 'react';
import axios,{ AxiosRequestConfig, AxiosResponse} from 'axios';



axios.defaults.baseURL = 'http://localhost:8080/api';
axios.defaults.withCredentials = true; 
export const postAPI = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
     await axios.post('http://localhost:8080/api/login', loginData, {withCredentials: true});
    
     window.location.href = '/dashboard';
    } catch (error:unknown) {
      if (axios.isAxiosError(error)) {
        setResponseMessage('An error occurred (UNKNOWN)');
      } else {
        setResponseMessage('An error occurred (UNKNOWN)');
      }
    }
  };