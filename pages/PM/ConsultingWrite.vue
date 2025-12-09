<template>
  <section>
    <ConsultingWriteTable />
    <ConsultingInquiry />
    <ConsultingAnswer />
    <div class="btn-group">
      <button class="btn-large btn004 round">
        <span>취소하기</span>
      </button>
      <button class="btn-large btn013 round">
        <span>저장하기</span>
      </button>
    </div>
  </section>
</template>
<script>
import ConsultingInquiry from '@/components/PM/Consulting/ConsultingInquiry.vue'
import ConsultingAnswer from '@/components/PM/Consulting/ConsultingAnswer.vue'
import ConsultingWriteTable from '@/components/PM/Consulting/ConsultingWriteTable.vue'

export default {
  components: {
    ConsultingInquiry,
    ConsultingAnswer,
    ConsultingWriteTable
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
  .btn-group{
    @apply flex w-full justify-center gap-3 my-[60px]
  }
  .btn-group button{
    @apply w-[160px]
  }
</style>