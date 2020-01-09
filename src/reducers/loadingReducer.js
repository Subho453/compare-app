const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case 'DATA_LOAD':
            return true;
        case 'DATA_LOAD_SUCCESS':
            return false;
        case 'DATA_LOAD_FAIL':
            return false;
        default:
            return state;
    }
}

export default loadingReducer;