import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCategoriesAddDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';

import { CATEGORIES_ACCTION_TYPES } from './category.types';



export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAddDocuments, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield put(fetchCategoriesFailed(error));
    }
};

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACCTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
};

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
};