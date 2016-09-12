<template>
    <card>
        <div class="filter">
            <template v-for="item in getFilterList">
                <div class="col-sm-2">
                    <label class="filter-name">{{ item.title }}:</label>
                </div>
                <div class="col-sm-10">
                    <ul class="list-inline classify-list">
                        <li v-for="option in item.options" transition="stagger" stagger="100">
                            <a href="javascript:" v-bind:class="$index == item.selected ? 'filter-selected' : 'filter-unselected'" @click="select($parent.$index, $index)">{{ option }}</a>
                        </li>
                    </ul>
                </div>
            </template>
        </div>
</card>
</template>

<script>
    import Vue from 'vue'
    import {
        getLang,
        getSearchFilter
    } from '../vuex/getter/getters'
    import {
        setSearchFilter
    } from '../vuex/action/actions'
    import card from './card.vue'

    export default {
        data: function() {
            return {        
                query: '',
                list: [
                        { msg: 'Bruce Lee' },
                        { msg: 'Jackie Chan' },
                        { msg: 'Chuck Norris' },
                        { msg: 'Jet Li' },
                        { msg: 'Kung Fury' }
                    ]
                }
        },
        methods: {
            select (pIndex, index) {
                switch (pIndex) {
                    case 0:
                        this.setSearchFilter('lang', index);
                        break;
                    case 1:
                        this.setSearchFilter('year', index);
                        break;
                }
            }

        },
        components: {
            card
        },
        created: function() {},
        vuex: {
            getters: {
                string: getLang,
                getSearchFilter
            },
            actions: {
                setSearchFilter
            }
        },
        computed: {
            getFilterList() {
                return [{
                    title: this.string.displayed_lang,
                    options: [this.string.all, this.string.chinese, this.string.japanese, this.string.english],
                    selected: this.getSearchFilter.lang
                }, {
                    title: this.string.played_year,
                    options: [this.string.all, '2016', '2015', '2014', '2013', this.string.other],
                    selected: this.getSearchFilter.year
                }]
            }

        }
    }
</script>

<style lang="sass" scoped>
    @import "../../css/color";
    @import "../../css/util";
    .filter {
        .filter-name {
            padding: 10px 0 5px 10px;
        }
        label {
            font-size: 14px;
            font-weight: 400;
            color: $text-black;
        }
        .classify-list {
            padding: 7px 0;
            margin-bottom: 0 !important;
            li {
                font-size: 14px;
                color: $text-black;
                padding: 3px 0 3px 8px !important;
                a {
                    color: $text-black;
                    padding: 5px 7px;
                    /*border-radius: 4px;*/
                }
                .filter-unselected {}
                .filter-unselected:hover {
                    background: $filter-unselected-hover;
                }
                .filter-selected {
                    background: $filter-selected-bg;
                    color: $filter-selected;
                }
            }
        }
    }

</style>