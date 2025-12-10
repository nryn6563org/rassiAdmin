<template>
  <section>
    <GroupSearch />
    <GroupTableInfo />
    <GroupTable />
  </section>
</template>
<script>
import GroupSearch from '@/components/UM/Group/GroupSearch.vue'
import GroupTableInfo from '@/components/UM/Group/GroupTableInfo.vue'
import GroupTable from '@/components/UM/Group/GroupTable.vue'

export default {
  components: {
    GroupSearch,
    GroupTableInfo,
    GroupTable
  },
  data() {
    return {
      // 페이지에서 사용할 제목 문자열
      pageSpecificTitle: '소속 등록 관리'
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