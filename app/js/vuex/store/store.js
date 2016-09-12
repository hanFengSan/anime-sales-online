import Vue from 'vue'
import Vuex from 'vuex'
import { TYPE } from '../action/mutation-types'
import stringCN from '../../../value/string-cn.json'
import stringEN from '../../../value/string-en.json'
import stringJP from '../../../value/string-jp.json'

Vue.use(Vuex)

const state = {
  string: stringCN,
  searchFilter: {'lang': 0, 'year': 0}
}

const mutations = {
  [TYPE.SET_LANG](state, lang) {
    switch (lang) {
      case 'cn':
        // state.string.test.val = stringCN.test.val
        // Vue.set(state, 'string', stringCN)
        // Vue.set(state.string, 'test', stringCN.test)
        // Vue.set(state.string, 'app_name', stringCN.app_name)
        state.string = stringCN
        // state.string.displayed_lang += '12'
        break
      case 'en':
        // state.string.test.val = stringEN.test.val
        // Vue.set(state.string, 'test', stringEN.test)
        // Vue.set(state, 'string', stringEN)
        // Vue.set(state.string, 'app_name', stringEN.app_name)
        // state.string.displayed_lang = stringEN.displayed_lang
        state.string = stringEN
        break
      case 'jp':
        // state.string.test.val = stringJP.test.val
        // Vue.set(state.string, 'test', stringJP.test)
        // Vue.set(state, 'string', stringJP)
        // state.string.displayed_lang = stringJP.displayed_lang
        // Vue.set(state.string, 'app_name', stringJP.app_name)
        state.string = stringJP
        break
    }
  },

  [TYPE.SET_SEARCH_FILTER](state, key, value) {
      state.searchFilter[key] = value;
  }
}

export default new Vuex.Store({
  state,
mutations})
