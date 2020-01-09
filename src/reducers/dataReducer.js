
const dataReducer = (state = [], action) => {
    if (action.type === 'DATA_LOAD_SUCCESS') {
        return [...state, ...action.data];
    }
    return state;

};

export default dataReducer;