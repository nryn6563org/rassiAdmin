<template>
  <section>
    <StandardAddPull />
    <BasicTab :tabs="tabsList" :modelValue.sync="currentTab" />
    <SignalSearch />
    <SignalTableInfo />
    <TextGuide :guideText="guide" />
    <SignalTable />
  </section>
</template>

<script>
import StandardAddPull from '@/components/IR/Standard/StandardAddPull.vue'
import SignalSearch from '@/components/IR/Signal/SignalSearch.vue'
import SignalTable from '@/components/IR/Signal/SignalTable.vue'
import BasicTab from '@/components/TabGroup/BasicTab.vue'
import TextGuide from '@/components/TextGuide.vue'
import SignalTableInfo from '@/components/IR/Signal/SignalTableInfo.vue'

export default {
  components: {
    SignalTableInfo,
    TextGuide,
    BasicTab,
    StandardAddPull,
    SignalSearch,
    SignalTable
  },
  data() {
    return {
      // 페이지에서 사용할 제목 문자열
      pageSpecificTitle: 'AI매매신호 종목추천',
      tabsList: ['전체 종목', '추천 활성 종목', '추천 제외 종목'],
      currentTab: 0,
      guide: '추천 비활성시 종목추천 알림이 전송되지 않습니다. 종목을 새로 추가하거나, 활성시키는 경우 다음 매수신호부터 종목추천 알림이 재개됩니다.'
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
