<template>
  <div class="schInput">
    <label for="schInput">
      <input type="text" name="" id="schInput" :placeholder="searchLabel" />
      <button type="submit" class="btn007">검색</button>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    searchLabel: {
      type: String,
      default: '종목명 또는 종목코드 검색'
    }
  }

}
</script>

<style scoped>
.schInput label{
  @apply flex items-center gap-2
}
.schInput input{
  @apply w-[450px] h-10 p-2.5 border-[1px] border-[#E3E3E3] text-[16px] text-[#5E6367] rounded-[6px]
}
.schInput input::placeholder{
  @apply text-[16px] text-[#9E9E9E]
}
.schInput button{
  @apply h-10 rounded-[6px] w-[70px] text-[16px] justify-center border-none cursor-pointer
}
</style>
