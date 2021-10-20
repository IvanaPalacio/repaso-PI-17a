import {
    GET_POST_CATEGORIAS,
    GET_ALL_CATEGORIAS,
    GET_ALL_POST,
    GET_ALL_USERS,
    POST_CATEGORIAS
}from '../actions/names'

const initialState = {
    usuarios: [],
    categorias: [],
    posts: [],
    postCategorias: []
}

export default function reducer (state = initialState, { type, payload } ){
    switch (type) {

        case GET_POST_CATEGORIAS:
            return {
                ...state,
                postCategorias: payload
            }

        case GET_ALL_CATEGORIAS:
            return {
                ...state,
                categorias: payload
            }

        case GET_ALL_POST:
            return {
                ...state,
                posts: payload
            }

        case GET_ALL_USERS:
            return {
                ...state,
                usuarios: payload
            }

        case POST_CATEGORIAS:
            return {
                ...state,
                categorias: [...state.categorias, payload]
            }

        default: 
        return state
    }

}