import axios from 'axios'

import {
    GAME_LIST_SUCCESS,
    GAME_LIST_FAIL,
    GAME_LIST_REQUEST,
    GAME_DETAILS_REQUEST,
    GAME_DETAILS_SUCCESS,
    GAME_DETAILS_FAIL,
    LIST_GAME_FILTER_REQUEST,
    LIST_GAME_FILTER_SUCCESS,
    LIST_GAME_FILTER_FAIL,
    UPLOAD_GAME_REQUEST,
    UPLOAD_GAME_SUCCESS,
    UPLOAD_GAME_FAIL
} from '../constants/gameConstants'

export const listAllGames = () => async (dispatch) => {
    try {
        dispatch({ type: GAME_LIST_REQUEST })

        const { data } = await axios.get('/api/games')

        dispatch({
            type: GAME_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GAME_LIST_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}

export const listGameDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: GAME_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/games/${id}`)

        dispatch({
            type: GAME_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GAME_DETAILS_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}

export const listGameFilterAction = (search) => async (dispatch) => {
    try {
        dispatch({ type: LIST_GAME_FILTER_REQUEST })

        const nameFilter = search.split('=')[0]
        const range = search.split('=')[1]

        if (nameFilter == 'price') {
            const { data } = await axios.post('/api/games/price', {
                range
            })

            dispatch({
                type: LIST_GAME_FILTER_SUCCESS,
                payload: data
            })
        } else {
            const { data } = await axios.post('/api/games/category', {
                range
            })

            dispatch({
                type: LIST_GAME_FILTER_SUCCESS,
                payload: data
            })
        }

    } catch (error) {
        dispatch({
            type: LIST_GAME_FILTER_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}

export const uploadGameToServer = ({ name, price, description,
    publisher, icon, countInStock, category }) => async (dispatch) => {
        try {
            dispatch({ type: UPLOAD_GAME_REQUEST })

            const { data } = await axios.post('/api/games', {
                name,
                price,
                description,
                publisher,
                icon,
                countInStock,
                category
            })

            dispatch({
                type: UPLOAD_GAME_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: UPLOAD_GAME_FAIL,
                payload: error.response && error.response.data.message ?
                    error.response.data.message : error.message
            })
        }
    }