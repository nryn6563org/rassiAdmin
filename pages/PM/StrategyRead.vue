<template>
  <section>
    <div class="top">
      <div class="title">
        <strong>{{ boardTitle }}</strong>
      </div>
      <div class="info">
        <span>{{ userName }}</span>
        <span>{{ date }}</span>
        <span>{{ publicScope }}</span>
      </div>

      <div class="btn-group">
        <button class="btn-mid btn011 round">
          <span>수정하기</span>
        </button>
        <button @click="handleModalClick($event)" class="btn-mid btn0062 round btnDlt">
          <span>삭제하기</span>
        </button>
      </div>
    </div>
    <!-- top -->

    <div class="mid">
      <div class="itemList">
        <span>관련종목 :&nbsp;</span>
        <span class="item" v-for="(item, itemIndex) in itemList" :key="itemIndex">{{ item }}</span>
      </div>
      <div class="image">
        <span>대표이미지 :&nbsp;</span>
        <span class="imageName">{{ imageName }}</span>
      </div>
    </div>
    <!-- mid -->

    <div class="viewContent">
      <div>
        2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠습2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석
        내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의
        특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 <br /><br />
        현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠 2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을
        전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠 2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매
        코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐
        보겠2025년 <br /><br />
        현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠 2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을
        전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매
        코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠
      </div>
      <button class="btn-large btn008 round" @click="gotoList()">목록으로</button>
    </div>
    <!-- viewContent -->
  </section>
</template>
<script>
import BoardModal from '@/components/Modal/BoardModal.vue'
export default {
  data() {
    return {
      boardTitle: '2025년 현대로템의 특별 매매 코멘트로 전격 분석 내용을 전격으로 파헤쳐 보겠습니다.',
      userName: '홍길동',
      date: '2025.12.11 13:30',
      publicScope: '전체공개',
      itemList: ['씨제이바이오사이언스(311690)', '삼성SDI(311690)', 'NAVER(311690)', 'NAVER(311690)', 'NAVER(311690)', 'NAVER(311690)', '삼성전자(311690)', '모나미(311690)', '디지털대성(311690)', '디지털대성(311690)', '디지털대성(311690)'],
      imageName: '대표이미지'
    }
  },
  methods: {
    gotoList() {
      this.$router.push('/PM/Strategy')
    },
    handleModalClick(event) {
      // 1. 클릭된 요소 중 가장 가까운 버튼 찾기
      const button = event.target.closest('button')
      const activeCheckbox = event.target.closest('.activeChecking')

      if (!button && !activeCheckbox) {
        return
      }

      let component = null
      let mode = ''

      // 2. 버튼 클래스에 따라 컴포넌트 및 모드 설정
      if (button) {
        if (button.classList.contains('btnDlt')) {
          // 삭제
          component = BoardModal // 혹은 삭제 전용 모달
          mode = 'delete'
        }
      }

      // 3. 모달 열기 이벤트 발송
      if (component) {
        this.$nuxt.$emit('open-global-modal', {
          component,
          props: {
            mode // TradingModal 등에서 사용할 모드값 전달
          }
        })
      }
    }
  }
}
</script>
<style scoped>
section {
  @apply pt-[30px];
}
.top {
  @apply relative w-full flex flex-col pb-6 border-b-[1px] border-[#E0E0E0];
}
.title {
  @apply w-full;
}
.title strong {
  @apply text-[28px] leading-[130%] text-[#141414] font-semibold;
}
.info {
  @apply flex w-full items-center h-5 gap-2.5 mt-9;
}
.info span {
  @apply h-5 leading-5 text-[16px] text-[#5E6367] px-2.5 border-x-[1px] border-[#E0E0E0] first:px-0 first:border-none last:px-0 last:border-none;
}
.btn-group {
  @apply absolute bottom-6 right-0 flex items-center gap-2.5;
}
.mid {
  @apply mt-4 flex flex-col w-full gap-4;
}
.itemList {
  @apply w-[1000px] flex flex-wrap gap-y-[5px];
}
.itemList span {
  @apply text-[16px] text-[#5E6367];
}
.itemList .item {
  @apply text-[16px] text-[#0263E8] before:content-['#'] before:mr-[3px] mr-3 last:mr-0;
}
.image {
  @apply w-full;
}
.image span {
  @apply text-[16px] text-[#5E6367];
}
.image .imageName {
  @apply underline;
}
.viewContent {
  @apply w-full flex flex-col items-center gap-[80px] mt-[50px];
}
.viewContent > div {
  @apply w-full text-[16px] text-[#5E6367] leading-[160%];
}
.viewContent button {
  @apply w-[160px];
}
</style>
