<template>
  <section>
    <ConsultingSearch />
    <ConsultingTableInfo />
    <ConsultingTable />
  </section>
</template>
<script>
import ConsultingSearch from '@/components/PM/Consulting/ConsultingSearch.vue'
import ConsultingTableInfo from '@/components/PM/Consulting/ConsultingTableInfo.vue'
import ConsultingTable from '@/components/PM/Consulting/ConsultingTable.vue'

export default {
  components: {
    ConsultingSearch,
    ConsultingTableInfo,
    ConsultingTable
  },
  data() {
    return {
      // 페이지에서 사용할 제목 문자열
      pageSpecificTitle: '종목상담'
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