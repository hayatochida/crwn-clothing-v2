import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACCTION_TYPES } from "./category.types";



export const fetchCategoriesStart = () =>
    createAction(CATEGORIES_ACCTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
    createAction(
        CATEGORIES_ACCTION_TYPES.FETCH_CATEGORIES_SUCCESS,
        categoriesArray
    );

export const fetchCategoriesFailed = (error) =>
    createAction(
        CATEGORIES_ACCTION_TYPES.FETCH_CATEGORIES_FAILD,
        error
    );

