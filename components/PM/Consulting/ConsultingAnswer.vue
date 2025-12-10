<template>
  <div class="answer">
    <div class="top">
      <strong>종목답변</strong>
      <span>작성자 : {{ answerAutor }}</span>
    </div>
    <div class="inputArea">
      <textarea name="" id="" placeholder="상담 답변을 입력해주세요."></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answerAutor: '홍길동'
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
</style>