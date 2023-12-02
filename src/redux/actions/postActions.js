import { POST_FETCHING, POST_FETCH_ERROR, POST_FETCH_SUCCESS } from './actionTypes'
import axios from 'axios'

export const post_fetching = () => {
    return {
        type: POST_FETCHING
    }
}

export const post_fetch_success = (data) => {
    return {
        type: POST_FETCH_SUCCESS,
        payload: data
    }
}

export const post_fetch_error = (error) => {
    return {
        type: POST_FETCH_ERROR,
        payload: error
    }
}

export const fetchPost = (api) => {
    return async (dispatch) => {
        try {
            dispatch(post_fetching());
            const response = await axios.get(api);
            dispatch(post_fetch_success(response.data));
        }
        catch (error) {
            dispatch(post_fetch_error(error.message))
        }
    }
}