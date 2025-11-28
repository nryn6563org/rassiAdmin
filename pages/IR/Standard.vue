<template>
  <section>
    <StandardAddPull />
    <BasicTab :tabs="tabsList" v-model="currentTab" />
    <StandardSearch />
    <TextGuide :guideText="guide" />
    <StandardTableInfo />
    <StandardTable />
  </section>
</template>

<script>
import StandardAddPull from '~/components/IR/StandardAddPull.vue'
import StandardSearch from '~/components/IR/StandardSearch.vue'
import StandardTable from '~/components/IR/StandardTable.vue'
import BasicTab from '~/components/TabGroup/BasicTab.vue'
import TextGuide from '~/components/TextGuide.vue'
import StandardTableInfo from '~/components/IR/StandardTableInfo.vue'

export default {
  components: {
    StandardTableInfo,
    TextGuide,
    BasicTab,
    StandardAddPull,
    StandardSearch,
    StandardTable
  },
  data() {
    return {
      // 페이지에서 사용할 제목 문자열
      pageSpecificTitle: '스탠다드 종목추천',
      tabsList: ['전체 종목', '매수 종목', '매도 종목', '예약/취소/만료 종목'],
      currentTab: 0,
      guide: '나의 종목추천 순위와 성과는 라씨 매매비서 앱 엑스퍼트에서 확인이 가능하며 사용자들에게 공개됩니다.'
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
  @apply py-[30px]
}
.stockRD{
  @apply mb-10
}
.tab{
  @apply mb-5
}
</style>
