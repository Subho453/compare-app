import { takeEvery, take, call, put, select } from 'redux-saga/effects';
// import { DATA } from '../constants';
import { fetchData } from '../api';
import { setData, setError, dataAdd, dataRemove } from '../actions';

function* handleData() {
    try {
        const data = yield call(fetchData);
        yield put(setData(data));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}
function* handleAdd(action) {
    const data = action.product;
    const products = yield select(state => state.product);
    if (products.indexOf(data) === -1) {
        yield put(dataAdd(data));
    } else {
        yield put(dataRemove(data));
    }

}
export default function* rootSaga() {
    yield takeEvery('DATA_LOAD', handleData);
    yield takeEvery('DATA_COMPARE', handleAdd)
}