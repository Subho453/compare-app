
const errorReducer = (state = null, action) => {
    switch (action.type) {
        case 'DATA_LOAD_FAIL':
            return action.error;
        case 'DATA_LOAD_SUCCESS':
            return null;

        default:
            return state;
    }
}

export default errorReducer;