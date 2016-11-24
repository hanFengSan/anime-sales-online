<template>
    <img v-bind:src="bannerUrl" class="image-center" />
</template>

<script>
export default {
    data () {
        return {
            bannerUrl: require('image!~img/banner.jpg')
        }
    },
    components: {}
}
</script>

<style lang="sass" scoped>
    @import "~style/util";
    @import "~style/color";
</style>