<template>
    <card>
        <label :class="discList.length != 0 ? 'card-title' : ''">共&nbsp;{{ discList.length }}&nbsp;条销量搜索结果</label>        
        <table class="table table-striped table-bordered" v-if="discList.length != 0">
            <thead>
                <tr>
                <th class="hidden-xs text-center">{{ string.vol_count }}</th>
                <th class="text-center">{{ string.average }}</th>
                <th class="hidden-xs text-center">{{ string.box }}</th>
                <th>{{ string.title }}</th>
                <th class="hidden-xs text-center">{{ string.played_date }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in discList">
                <td class="hidden-xs text-center">{{ item.vol_count }}</td>
                <td class="text-center">{{ item.average }}</td>
                <td class="hidden-xs text-center">{{ item.box }}</td>
                <td>{{ item.title }}</td>
                <td class="hidden-xs text-center">{{ item.played_date }}</td>
                </tr>
            </tbody>
        </table>
    </card>
</template>

<script>
    import card from './card.vue'
    import { getLang } from '../vuex/getter/getters'
 
    export default {
        data() {
                return {
                    discList: [
                        {vol_count: '全6巻', average: '**,611', box: '--,---', title: 'ジョジョの奇妙な冒険 スターダストクルセイダース エジプト編', played_date: '2015/1/3'},
                        {vol_count: '全6巻', average: '*1,195', box: '--,---', title: 'アブソリュート・デュオ', played_date: '2015/1/5'},
                        {vol_count: '全1巻', average: '18,031', box: '', title: '	ドアマイガーD', played_date: '2015/1/7'},
                        {vol_count: '全6巻', average: '*1,705', box: '--,---', title: '	艦隊これくしょん -艦これ-', played_date: '2015/1/8'}
                    ]
                }
            },
        components: { card },
        vuex: {
            getters: {
                string: getLang
            }
        }
        
    }
</script>

<style lang="sass" scoped>

    label {
        margin-bottom: 0;
    }

    .card-title {
        margin-bottom: 10px;
    }

</style>