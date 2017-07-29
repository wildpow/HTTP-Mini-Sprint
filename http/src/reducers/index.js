import { combineReducers } from 'redux';
import { GET_FRIENDS } from '../actions';

const friendsReducer = (friends = [], action) => {
    // Add the code for this reducer
};

const rootReducer = combineReducers({
    friends: friendsReducer
});

export default rootReducer;