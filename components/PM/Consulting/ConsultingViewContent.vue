<template>
  <div class="answer">
    <div class="top">
      <strong>종목답변</strong>
      <div class="info">
        <span>작성자 : {{ answerAutor }}</span>
        <span class="date">{{ answerDate }}</span>
      </div>
      <div class="btn-group">
        <button class="btn-mid btn011 round">
          <span>수정하기</span>
        </button>
        <button @click="handleModalClick($event)" class="btn-mid btn0062 round AnswerDlt">
          <span>삭제하기</span>
        </button>
      </div>
    </div>
    <div class="viewContent">
      <span>
        좋은 질문 감사합니다. <br />
        포스코퓨처엠은 단기 주가 흐름만 보면 불안할 수 있지만, <br />
        구조적으로 성장 방향이 꺾인 것은 아닙니다. <br />
        다만, 단기 업황 둔화와 투자심리 위축이 겹치며 시장 전반의 리스크 회피 흐름 속에 <br />
        소재주가 일시적으로 과도하게 조정받고 있는 상황입니다.
      </span>
    </div>
  </div>
</template>

<script>
import BoardModal from '@/components/Modal/BoardModal.vue'
export default {
  data() {
    return {
      answerAutor: '홍길동',
      answerDate: '2026.01.02 12:43'
    }
  },
  methods: {
    handleModalClick(event) {
      const button = event.target.closest('button')
      const activeCheckbox = event.target.closest('.activeChecking')

      if (!button && !activeCheckbox) {
        return
      }

      let component = null
      let mode = ''

      // 2. 버튼 클래스에 따라 컴포넌트 및 모드 설정
      if (button) {
        if (button.classList.contains('AnswerDlt')) {
          // 삭제
          component = BoardModal // 혹은 삭제 전용 모달
          mode = 'answer'
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
.answer {
  @apply w-full bg-[#F9FAFB] rounded-[10px] p-[30px_40px] flex flex-col gap-5 mt-[30px];
}
.answer .top {
  @apply relative flex flex-col w-full gap-4;
}
.answer .top strong {
  @apply h-9 leading-8 text-[24px] text-[#141414] font-normal;
}
.answer .top .info {
  @apply flex w-full justify-between items-center;
}
.answer .top .info span {
  @apply text-[18px] text-[#5E6367] h-7 leading-7;
}
.answer .top .btn-group {
  @apply absolute top-0 right-0 flex gap-2;
}
.answer .viewContent {
  @apply text-[18px] leading-[130%] text-[#141414] min-h-[185px];
}
</style>
