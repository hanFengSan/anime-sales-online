import Vue from 'vue'
import app from './component/app-home.vue'
import store from './vuex/store/store'
import  '../css/main.scss'

var vm = new Vue({
    el: 'body',
    data: {},
    methods: {},
    components: { app }, 
    store: store
})