import reqRes from '../apis/reqRes';
import { 
    LOGIN,
    LOGOUT,
    CREATE_USER,
    EDIT_USER,
    LIST_USER,
    SHOW_USER,
    DELETE_USER
} from './types';

export const login = formValues => dispatch => {
    const response = reqRes.post('/login');

    dispatch({ type: LOGIN, payload: response });
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};

export const createUser = formValues => async dispatch => {
    const response = await reqRes.post('/users');

    dispatch({ type: CREATE_USER, payload: response.data });
};

export const editUser = (id, formValues) => async dispatch => {
    const response = await reqRes.put(`/users/${id}`, formValues);

    dispatch({ type: EDIT_USER, payload: response.data });
};

export const deleteUser = id => async dispatch => {
    await reqRes.delete(`/users/${id}`);

    dispatch({ type: DELETE_USER, payload: id});
}

export const listUser = () => async dispatch => {
    const response = await reqRes.get('/users');

    dispatch({ type: LIST_USER, payload: response.data });
};

export const showUser = id => async dispatch => {
    const response = await reqRes.post(`/users/${id}`);

    dispatch({ type: SHOW_USER, payload: response.data });
};