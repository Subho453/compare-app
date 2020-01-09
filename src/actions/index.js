
const loadData = () => ({
    type: 'DATA_LOAD'
});

const setData = data => ({
    type: 'DATA_LOAD_SUCCESS',
    data,
});
const setError = error => ({
    type: 'DATA_LOAD_FAIL',
    error,
});

const dataCompare = product => ({
    type: 'DATA_COMPARE',
    product
});

const dataAdd = product => ({
    type: 'DATA_ADD',
    product,
});

const dataRemove = product => ({
    type: 'DATA_REMOVE',
    product,
});

export {
    loadData,
    setData,
    setError,
    dataCompare,
    dataAdd,
    dataRemove
};