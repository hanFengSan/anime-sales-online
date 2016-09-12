<template>
    <div>
        <div class="search-banner">
            <div class="container">
                <div class="row outer">
                    <div class="col-md-5 col-md-offset-3">
                        <div class="search-container">
                            <input type="text" class="search-input" v-bind:placeholder="string.search_hint"/>
                            <div class="submit-container">
                                <div class="image-center search-img" v-bind:style="searchImg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getLang } from '../vuex/getter/getters'

export default {
    data () {
        return {               
            searchImg: {
                backgroundImage: 'url(' + require('image!../../assets/img/img-res.png')  + ')',
                backgroundRepeat: 'no repeat',
                backgroundPosition: '0px 0px',
                width: '28px',
                height: '28px'
            }}
    },
    components: {  },
    vuex: {
        getters: {
            string: getLang
        }
    }
}

</script>

<style lang="sass" scoped>
    @import "../../css/color";
    @import "../../css/util";

    .outer {
        position: relative;
    }

    .search-banner {
        background: $primary-color;
        height: 80px;
        display: block;
    }

    .search-container {
        margin-top: 20px;
    }

    input {
        font-family: Microsoft YaHei, '宋体', Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif;
        font-size: 20px;
        padding: 6px;
        border: 0px;
        display: inline-block;
        font-weight: lighter;
        margin: 0px;
        float: left;
        outline: medium;
    }

    .search-input {
        @extend input;
        width: 90%;
    }

    .submit-container {
        width: 10%;
        height: 40px;
        display: block;
        background-color: $search-banner-submit;
        overflow: hidden;
    }

    .search-img {
        background-color: $search-banner-submit;
        overflow: hidden;
        margin-top: 7px !important;
    }
</style>