import axios from 'axios';


const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        Authorization: `bearer ${process.env.BACKEND_API_KEY}`
    }
})


//Categories 

export const getCategories = async () => (api.get('/api/categories'));


//artciles

export const getArticles = async (queryString:string)=>api.get(`/api/articles?${queryString}`);


export const fetchArticleBySlug = async (queryString:string)=>api.get(`/api/articles?${queryString}`);