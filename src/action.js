import * as actionTypes from './constants';
import {autheticateGateway, apiGateWay} from './service';
import history from "./history";

export const signIn = (params) => async dispatch => {
    const response = await autheticateGateway.post('/login', params);
    if (!response.data.success) {
        history.push('/signin');
    } else {
        localStorage.setItem('token', response.data.data.token);
        dispatch({type: actionTypes.LOG_IN, payload: response.data.success});
        history.push('/');
    }

};

export const deleteMovies = (id) => async dispatch => {
    const response = await apiGateWay.delete(`/api/movies/${id}`);
    dispatch({type: actionTypes.DELETE_MOVIE, payload: response.data.success});
};

export const getMovies = () => async dispatch => {
    const response = await apiGateWay.get(`/api/movies/`);
    dispatch({type: actionTypes.GET_MOVIES, payload: response.data.data});
};

export const getMovie = id => async dispatch => {
    const response = await apiGateWay.get(`/api/movies/${id}`);
    dispatch({type: actionTypes.GET_MOVIE, payload: response.data.data});
};

export const editMovie = (params) => async dispatch => {
    const response = await apiGateWay.put(`/api/movies/`, params);
    dispatch({type: actionTypes.EDIT_MOVIES, payload: response.data.success});
    history.push('/');
};
export const createMovie = (params) => async dispatch => {
    const response = await apiGateWay.post(`/api/movies/`, params);
    dispatch({type: actionTypes.EDIT_MOVIES, payload: response.data.success});
    history.push('/');
};

export const signOut = () => {
    return {type: actionTypes.LOG_OUT, payload: false};
};
