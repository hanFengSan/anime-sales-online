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
import '~src/style/bootstrap.min.css'
import NavHeader from '~widget/nav-header.vue'
import SearchBanner from './sub-component/search-banner.vue'
import Filter from '~widget/filter.vue'
import SalesTable from './sub-component/sales-table.vue'
import SubjectResult from './sub-component/subject-result.vue'

export default {
    data () {
        return {}
    },
    components: { NavHeader, SearchBanner, Filter, SalesTable, SubjectResult }
}
</script>

<style lang="sass" scoped>

</style>