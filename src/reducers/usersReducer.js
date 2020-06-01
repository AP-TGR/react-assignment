import _ from 'lodash';
import { 
    CREATE_USER,
    EDIT_USER,
    LIST_USER,
    SHOW_USER,
    DELETE_USER
} from '../actions/types';

export default (state={}, action) => {
    switch (action.type) {
        case CREATE_USER:
        case EDIT_USER:
        case SHOW_USER:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_USER:
            return _.omit(state, action.payload);
        case LIST_USER:
            return { ...state, ..._.mapKeys(action.payload.data, 'id') };
        default:
            return state;
    }
};