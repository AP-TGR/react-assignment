import reqRes from '../apis/reqRes';

export const fetchUsers = () => async dispatch => {
    const response = await reqRes.get('/users');

    dispatch({ 'type': 'FETCH_USERS', payload: response.data.data });
};