<template>
  <div id="userInfo">
    <strong>
      <span>{{ user.name }}</span>
      <em>({{ user.rank }})</em>
    </strong>
    <!-- // -->

    <span>{{ user.nickName }}</span>

    <button>
      <span>내 정보 수정</span>
      <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.282715 0.282715L4.28271 4.28271L0.282715 8.28271" stroke="#5E6367" stroke-width="0.8" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '홍길동',
        rank: '관리자',
        nickName: 'tpmaster'
      }
    }
  }
}
</script>

<style scoped>
#userInfo {
  @apply p-2.5 flex flex-col w-full;
}
#userInfo > strong {
  @apply flex h-[30px] items-center text-[#141414];
}
#userInfo > strong span {
  @apply text-[24px] font-normal;
}
#userInfo > strong em {
  @apply pl-[2px] text-[16px] font-normal;
}
#userInfo > span {
  @apply w-full h-5 leading-5 text-[16px] text-[#447AEC];
}

#userInfo > button {
  @apply mt-2.5 h-4 leading-4 flex items-center w-fit;
}
#userInfo > button span {
  @apply text-[14px] text-[#5E6367] underline;
}
#userInfo > button svg {
  @apply ml-2;
}
</style>
