<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 card">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="sass" scoped>
    @import "../../css/color";
    @import "../../css/util";

    .card {
        background: $card;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 1.7%;
    }
</style>