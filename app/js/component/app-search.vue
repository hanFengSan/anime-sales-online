<template>
    <div>
        <nav-header></nav-header>
        <search-banner></search-banner>
        <filter></filter>
        <sales-table></sales-table>
        <subject-result></subject-result>
    </div>
</template>

<script>
import '../../css/bootstrap.min.css'
import NavHeader from './nav-header.vue'
import SearchBanner from './search-banner.vue'
import Filter from './filter.vue'
import SalesTable from './sales-table.vue'
import SubjectResult from './subject-result.vue'

export default {
    data () {
        return {}
    },
    components: { NavHeader, SearchBanner, Filter, SalesTable, SubjectResult }
}
</script>

<style lang="sass" scoped>

</style>