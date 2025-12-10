<template>
  <section>
    <StrategySearch />
    <StrategyTableInfo />
    <StrategyTable />
  </section>
</template>
<script>
import StrategySearch from '@/components/PM/Strategy/StrategySearch.vue'
import StrategyTableInfo from '@/components/PM/Strategy/StrategyTableInfo.vue'
import StrategyTable from '@/components/PM/Strategy/StrategyTable.vue'

export default {
  components: {
    StrategySearch,
    StrategyTableInfo,
    StrategyTable
  },
  data() {
    return {
      // 페이지에서 사용할 제목 문자열
      pageSpecificTitle: '투자전략'
    }
  },
  head() {
    // 브라우저 탭 타이틀 설정
    return {
      title: `${this.pageSpecificTitle}`
    }
  },
  mounted() {
    // 컴포넌트가 마운트된 후, Vuex 뮤테이션을 호출하여 타이틀 업데이트
    this.$store.commit('setPageTitle', this.pageSpecificTitle)
  }
}
</script>
<style scoped>
section{
  @apply pt-[30px]
}
</style>