<template>
  <div>스탠다드종목추천</div>
</template>

<script>
export default {
  data() {
    return {
      // 페이지에서 사용할 제목 문자열
      pageSpecificTitle: '스탠다드 종목추천'
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