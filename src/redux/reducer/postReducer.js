import { POST_FETCHING, POST_FETCH_ERROR, POST_FETCH_SUCCESS } from "../actions/actionTypes"

const initialState = {
    loading: false,
    data: [],
    error: null
}

export const postReducer = (state = initialState, action) => {

    switch(action.type) {
        case POST_FETCHING: return {...state, loading: true, data:[], error: null}
        case POST_FETCH_SUCCESS: return {...state, loading: false, data: action.payload, error: null}
        case POST_FETCH_ERROR: return {...state, loading: false, data:[], error: action.payload}
        default: return state
    }
}