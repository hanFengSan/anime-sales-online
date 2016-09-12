import Vue from 'vue'
import app from './component/app-search.vue'
import store from './vuex/store/store'
import '../css/main.scss'

var vm = new Vue({
  el: 'body',
  data: {},
  components: { app},
  store: store
})
