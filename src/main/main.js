import Vue from 'vue'
import app from '~view/home/app-home.vue'
import store from '~vuex/store/store'
import  '~src/style/main.scss'

var vm = new Vue({
    el: 'body',
    data: {},
    methods: {},
    components: { app }, 
    store: store
})