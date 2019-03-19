import * as actionTypes from './constants';

const initialState = {
    isAuthenticated: false,
    movies: [],
    selectedMovie:[]
};

export const AuthenticationReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.LOG_IN:
        case actionTypes.LOG_OUT: {
            return {...state, isAuthenticated: action.payload}
        }

        case actionTypes.GET_MOVIES: {
            return {...state, movies: action.payload}
        }
        case actionTypes.DELETE_MOVIE: {
            return {...state}
        }
        case actionTypes.GET_MOVIE: {
            return {...state, selectedMovie: action.payload}
        }

        default:
            return state;
    }
}

