import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACCTION_TYPES, Category } from "./category.types";

export type FetchCategoriesStart = Action<CATEGORIES_ACCTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACCTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACCTION_TYPES.FETCH_CATEGORIES_FAILD, Error>;



export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart =>
    createAction(CATEGORIES_ACCTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(
        CATEGORIES_ACCTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray));

export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed =>
    createAction(
        CATEGORIES_ACCTION_TYPES.FETCH_CATEGORIES_FAILD, error));

