<template>
    <div>
        <div class="row">
            <div class="col-md-5">
                <div class="search-container">
                    <input type="text" class="search-input" />
                    <div class="submit-container">
                        <div class="image-center search-img" v-bind:style="searchImg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-5">
            <p class="hot text-single-line">
                <span class="search-hot-span">{{ string.hot }}：</span>
                <a v-for="keyword in hot" href="javascript:">{{ keyword }}</a>
            </p>
        </div>
    </div>
    </div>



</template>

<script>
import { getLang } from '~vuex/getter/getters'

export default {
    data() {
        return {
               searchImg: {
                backgroundImage: 'url(' + require('image!~img/img-res.png')  + ')',
                backgroundRepeat: 'no repeat',
                backgroundPosition: '0px 0px',
                width: '28px',
                height: '28px'
            },
            hot: [ '秒速五厘米', '从零开始的异世界生活', '刀剑神域', '言叶之庭', '你的名字']
        }
    },
    vuex: {
        getters: {
            string: getLang
        },
    }
}
</script>

<style lang="sass" scoped>
    @import "~style/util";
    @import "~style/color";

    .search-container {
        background: $search-container;
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
        background-color: $search-submit-bg;
        overflow: hidden;
    }
    
    .search-img {
        background-color: $search-submit-bg;
        overflow: hidden;
        margin-top: 7px !important;
    }
    
    .hot {
        margin-top: 8px;
        color: $search-hot-span;
        .search-hot-span {
            padding-right: 5px;
            color: $search-hot-span;
        }
        a {
            color: $search-hot-span;
            padding-right: 10px;
        }
    }
</style>