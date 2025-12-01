<template>
  <div class="dateArray">
    <button v-for="(dateBtn, dateBtnIndex) in dateBtns" :key="dateBtnIndex" class="dateBtn" :class="{ active: modelValue === dateBtnIndex }" @click="selectBtn(dateBtnIndex)">
      <span>{{ dateBtn }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    dateBtns: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Number,
      default: 0
    }
  },
  methods: {
    selectBtn(index) {
      // 부모에게 값을 업데이트해달라고 요청
      this.$emit('update:modelValue', index)
    }
  }
}
</script>

<style scoped>
.dateArray{
  @apply flex items-center
}
.dateArray button{
  @apply h-10 w-fit px-[15px] rounded-[6px] flex items-center text-[16px] text-[#303B49] cursor-pointer
  hover:bg-[#F2F4F6]
}
.dateArray button.active{
  @apply bg-[#F2F4F6]

}
</style>