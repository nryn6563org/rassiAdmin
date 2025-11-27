<template>
  <div id="login">
    <h1><img src="~/assets/img/loginLogo.png" alt="씽크풀 로고" width="270"></h1>

    <div class="guide">
      <span>등록되지 않은 아이디입니다.</span>
      <em>권한이 부여된 씽크풀 계정으로 로그인 하세요.</em>
      <button @click="goToPage">다른 아이디로 로그인하기</button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'custom',
  methods: {
    goToPage() {
      this.$router.push('/BD/DashBoard')
    }
  }
}
</script>

<style scoped>
#login{
  @apply flex flex-col w-full h-full items-center justify-center
}
#login .guide{
  @apply w-[500px] h-[220px] border-[1px] border-[#E8EDFD] bg-[#F4F8FF] opacity-80 flex flex-col justify-center items-center rounded-[30px] mt-10
}
#login .guide span{
  @apply text-[24px] text-[#141414]
}
#login .guide em{
  @apply mt-3 text-[18px] text-[#FC2F2F]
}
#login .guide button{
  @apply w-[380px] h-[60px] bg-[#E6E6E6] rounded-[10px] flex  justify-center items-center text-[18px] text-[#303B49] mt-5
}
</style>