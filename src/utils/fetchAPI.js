import axios from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
      maxResults:'50'
    },
    headers: {
      'X-RapidAPI-Key': '03dc1b918fmsh7887a124b9f3e41p19093djsn85f2c6326a4e',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const fetchAPI = async (url)=>{
   const {data}= await axios.get(`${BASE_URL}/${url}`,options)
   return data;
  }