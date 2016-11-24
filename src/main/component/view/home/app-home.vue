<template>
    <div v-bind:style="bgObject">
        <nav-header></nav-header>
        <div class="container">
            <div class="row" style="margin-top: 200px">
                <search></search>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import '~src/style/bootstrap.min.css'
import NavHeader from '~widget/nav-header.vue'
import Banner from './sub-component/banner.vue'
import Search from './sub-component/search-input.vue'
import AppFooter from '~widget/footer.vue'

export default {
    data () {
        return {
            bgObject: {
                background : 'url(' + require('image!~img/bg.jpg') + ') 50% 50% no-repeat',
                display: 'block',
                height: '100%',
                backgroundSize: 'cover',
                position: 'absolute',
                width: '100%', top: 0, left: 0, bottom: 0, zIndex: -1,
            }
        }
    },
    components: { NavHeader, Banner, Search, AppFooter }
}
</script>

<style lang="sass">

</style>