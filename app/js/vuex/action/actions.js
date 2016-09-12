import { TYPE } from './mutation-types'

export const setLang = function ({ dispatch, state}, lang) {
    dispatch(TYPE.SET_LANG, lang);
}

export const setSearchFilter = function ({dispatch, state}, key, value) {
    dispatch(TYPE.SET_SEARCH_FILTER, key, value);
}