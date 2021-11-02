import axios from 'axios'

import {
    GAME_LIST_SUCCESS,
    GAME_LIST_FAIL,
    GAME_LIST_REQUEST,
    GAME_DETAILS_REQUEST,
    GAME_DETAILS_SUCCESS,
    GAME_DETAILS_FAIL
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
            error: error.response && error.response.data.message ?
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
            error: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}