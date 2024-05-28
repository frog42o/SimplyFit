import { useState, useEffect } from 'react';
import axios,{ AxiosRequestConfig, AxiosResponse} from 'axios';



axios.defaults.baseURL = 'http://localhost:8080/api';
axios.defaults.withCredentials = true; 


const getAPI = <T, >(url:string) => {
  
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(url);
        setData(response.data);
      }  catch (error:unknown) {
        if(axios.isAxiosError(error)){
            setError(error.response?.data);
        }else{
            setError("Something went wrong. Try again later!");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default getAPI;
