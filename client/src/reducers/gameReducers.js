import {
    GAME_LIST_REQUEST,
    GAME_LIST_SUCCESS,
    GAME_LIST_FAIL,
    GAME_DETAILS_REQUEST,
    GAME_DETAILS_SUCCESS,
    GAME_DETAILS_FAIL,
    LIST_GAME_FILTER_REQUEST,
    LIST_GAME_FILTER_SUCCESS,
    LIST_GAME_FILTER_FAIL
} from "../constants/gameConstants"

export const gameListReducer = (state = {}, action) => {
    switch (action.type) {
        case GAME_LIST_REQUEST:
            return { loading: true }
        case GAME_LIST_SUCCESS:
            return {
                loading: false,
                games: action.payload
            }
        case GAME_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const gameDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case GAME_DETAILS_REQUEST:
            return { loading: true}
        case GAME_DETAILS_SUCCESS:
            return {
                loading: false,
                game: action.payload
            }
        case GAME_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const listGameFilterReducer = (state = {}, action) => {
    switch (action.type) {
        case LIST_GAME_FILTER_REQUEST:
            return { loading: true }
        case LIST_GAME_FILTER_SUCCESS:
            return {
                loading: false,
                gameFilter: action.payload
            } 
        case LIST_GAME_FILTER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state 
    }
}