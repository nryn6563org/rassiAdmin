<template>
  <div class="answer">
    <div class="top">
      <strong>종목답변</strong>
      <span>작성자 : {{ answerAutor }}</span>
    </div>
    <div class="inputArea">
      <textarea name="" id="" placeholder="상담 답변을 입력해주세요."></textarea>
    </div>
    <div class="viewContent">
      <span v-html="answerViewContent"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answerAutor: '홍길동',
      answerViewContent:
        '답변 작성 영역과 답변 내용 영역은 개발단에서 적용합니다 <br>좋은 질문 감사합니다. <br>포스코퓨처엠은 단기 주가 흐름만 보면 불안할 수 있지만,<br>구조적으로 성장 방향이 꺾인 것은 아닙니다.<br>다만, 단기 업황 둔화와 투자심리 위축이 겹치며 시장 전반의 리스크 회피 흐름 속에<br>소재주가 일시적으로 과도하게 조정받고 있는 상황입니다.'
    }
  }
}
</script>

<style scoped>
.answer{
  @apply w-full bg-[#F9FAFB] rounded-[10px] p-[30px_40px] flex flex-col gap-5 mt-[30px]
}
.answer .top{
  @apply flex flex-col w-full gap-4
}
.answer .top strong{
  @apply h-9 leading-8 text-[24px] text-[#141414] font-normal
}
.answer .top span{
  @apply text-[18px] text-[#5E6367] h-7 leading-7
}
.inputArea{
  @apply w-full
}
.inputArea textarea{
  @apply w-full h-[200px] p-2.5 text-[18px] text-[#141414] placeholder:text-[18px] placeholder:text-[#9e9e9e] outline-none resize-none rounded-[5px]
}
.viewContent{
  @apply w-full min-h-[185px]
}
.viewContent span{
  @apply text-[18px] text-[#141414] leading-[150%]
}
</style>