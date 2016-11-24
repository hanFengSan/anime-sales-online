<template>
    <footer>
        <p class="text-center copyright">{{ string.copyright }}</p>
    </footer>
</template>

<script>
    import { getLang } from '~vuex/getter/getters'

    export default {
        vuex: {
            getters: {
                string: getLang
            },
        }
    }
</script>

<style lang="sass" scoped>
    @import "~style/color";
    @import "~style/util";
    footer {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 30px;
        width: 100%;
        background-color: $footer-black;
        .copyright {
            color: $copyright;
            font-size: 12px;
            line-height: 30px;
            margin: 0;
        }
    }
</style>