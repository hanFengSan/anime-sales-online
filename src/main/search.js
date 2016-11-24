import Vue from 'vue'
import app from '~view/search/app-search.vue'
import store from '~vuex/store/store'
import '~src/style/main.scss'

var vm = new Vue({
  el: 'body',
  data: {},
  components: { app},
  store: store
})
