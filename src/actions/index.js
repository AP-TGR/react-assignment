import users from '../apis/users';
import { 
    LOGIN,
    LOGOUT,
    CREATE_USER,
    EDIT_USER,
    LIST_USER,
    SHOW_USER,
    DELETE_USER
} from './types';
import history from '../history';

export const login = formValues => dispatch => {
    const response = users.post('/login');

    dispatch({ type: LOGIN, payload: response });
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};

export const createUser = formValues => async dispatch => {
    const response = await users.post('/users', formValues);

    dispatch({ type: CREATE_USER, payload: response.data });
    history.push('/');
};

export const editUser = (id, formValues) => async dispatch => {
    const response = await users.patch(`/users/${id}`, formValues);

    dispatch({ type: EDIT_USER, payload: response.data });
    history.push('/');
};

export const deleteUser = id => async dispatch => {
    await users.delete(`/users/${id}`);

    dispatch({ type: DELETE_USER, payload: id});
    history.push('/');
}

export const listUser = () => async dispatch => {
    const response = await users.get('/users');

    dispatch({ type: LIST_USER, payload: response });
};

export const showUser = id => async dispatch => {
    const response = await users.get(`/users/${id}`);

    dispatch({ type: SHOW_USER, payload: response.data });
};