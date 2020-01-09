import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import dataReducer from './dataReducer';
import errorReducer from './errorReducer';
import compareReducer from './compareReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    data: dataReducer,
    error: errorReducer,
    product: compareReducer
});

export default rootReducer;