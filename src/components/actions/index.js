import{
    GET_ALL_USERS,
    GET_ALL_CATEGORIAS,
    GET_ALL_POST,
    GET_POST_CATEGORIAS,
    POST_CATEGORIAS
}from './names'
import axios from'axios'
// import axios from 'axios'
// const algo = axios.create({
//     baseUrl:"http:/localhost:3001"
// })
// export algo

const BASE_URL = "http:/localhost:3001";

export function getAllUsers (){
    return (dispatch)=>{
        axios.get(`${BASE_URL}/usuario/all`)
        .then(response => {
            dispatch({
                type: GET_ALL_USERS,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
    }
}
export function getAllPosts (){
    try {
        return async(dispatch)=>{
        const response = await axios.get(`${BASE_URL}/post`);
            dispatch({
                type: GET_ALL_POST,
                payload: response.data
            })
        }    
    } catch (error) {
       console.log(error)
    }
}
export function getAllCategorias (){
    return (dispatch)=>{
        axios.get(`${BASE_URL}/categoria/all`)
        .then(response => {
            dispatch({
                type: GET_ALL_CATEGORIAS,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
    }
}
export function arregloDeCategorias (id, categorias){
    return (dispatch)=>{
        axios.post(`${BASE_URL}/post/${id}/addcategorias`, { categorias: categorias })
        .then(response => {
            dispatch({
                type: GET_POST_CATEGORIAS,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
    }
}
export function getPostCategorias (id){
    return (dispatch)=>{
        axios.get(`${BASE_URL}/post/${id}`)
        .then(response => {
            dispatch({
                type: GET_POST_CATEGORIAS,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
    }
}
export function crearCategoria (name){
    return (dispatch)=>{
        axios.post(`${BASE_URL}/categoria`, { name } )
        .then(response => {
            dispatch({
                type: POST_CATEGORIAS,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
    }
}
