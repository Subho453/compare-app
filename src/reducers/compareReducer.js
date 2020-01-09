
const compareReducer = (state = [], action) => {
    if (action.type === 'DATA_ADD') {
        return [...state, action.product];
    }
    else if (action.type === 'DATA_REMOVE') {
        const products = [...state];
        products.splice(products.indexOf(action.product), 1);
        return products;
    }
    return state;

};

export default compareReducer;