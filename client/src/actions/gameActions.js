import axios from 'axios'

import {
    GAME_LIST_SUCCESS,
    GAME_LIST_FAIL,
    GAME_LIST_REQUEST
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