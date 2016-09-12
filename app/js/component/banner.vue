<template>
    <img v-bind:src="bannerUrl" class="image-center" />
</template>

<script>
export default {
    data () {
        return {
            bannerUrl: require('image!../../assets/img/banner.jpg')
        }
    },
    components: {}
}
</script>

<style lang="sass" scoped>
    @import "../../css/color";
    @import "../../css/util";
</style>