<template>
  <section>
    <ExpertSearch />
    <ExpertTableInfo />
    <ExpertTable />
  </section>
</template>
<script>
import ExpertSearch from '@/components/UM/Expert/ExpertSearch.vue'
import ExpertTableInfo from '@/components/UM/Expert/ExpertTableInfo.vue'
import ExpertTable from '@/components/UM/Expert/ExpertTable.vue'

export default {
  components: {
    ExpertSearch,
    ExpertTableInfo,
    ExpertTable
  },
  data() {
    return {
      // 페이지에서 사용할 제목 문자열
      pageSpecificTitle: '전문가·관리자 회원 관리'
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