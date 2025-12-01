<template>
  <div class="date">
    <input
      type="date"
      name=""
      id=""
      class="customDate"
      ref="dateInput"
      data-placeholder="날짜 선택"
    >
  </div>
</template>

<script>
</script>

<style scoped>
.customDate {
  @apply appearance-none border-[1px] border-[#E3E3E3] rounded-[6px] p-[10px_12px] text-[16px] text-[#5E6367] bg-white
}
/* 포커스 효과 */
.customDate:focus {
  @apply outline-none border-[#4A90E2] shadow-[0_0_0_3px_rgba(74,144,226,0.1)]
}
/* 기본 캘린더 아이콘 커스텀 (Chrome, Edge, Safari 등) */
.customDate::-webkit-calendar-picker-indicator {
  @apply bg-[url('~/assets/img/ico_cal.png')] bg-no-repeat bg-contain bg-center w-5 h-5 cursor-pointer
}
</style>