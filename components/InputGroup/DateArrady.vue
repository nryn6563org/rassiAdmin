<template>
  <div class="dateArray">
    <button v-for="(dateBtn, dateBtnIndex) in dateBtns" :key="dateBtnIndex" class="dateBtn">
      <span>{{ dateBtn.date }}</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateBtns: ['전체', '오늘', '어제', '지난주', '이번주', '1개월', '3개월', '6개월']
    }
  }
}
</script>