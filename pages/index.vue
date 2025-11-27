<template>
  <div></div>
</template>
<script>
export default {
  // index 페이지가 로드되기 전에 다른 라우트로 리다이렉트
  middleware: [
    (context) => {
      // 'BD-DashBoard' 라우트로 이동
      context.redirect('/BD/DashBoard')
    }
  ]
}
</script>
<style scoped>
</style>