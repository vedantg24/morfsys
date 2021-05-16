import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from "./types";

import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

//Login User
export const login = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/users/login', formData, config);

        dispatch({ type: LOGIN_SUCCESS, payload: res.data });

        setAuthToken(res.data.token);
    } catch (err) {
        dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
    }
};

//Logout
export const logout = () => {
    return {
        type: LOGOUT
    };
};