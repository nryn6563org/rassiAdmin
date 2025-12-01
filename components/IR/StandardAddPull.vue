<template>
  <div class="stockRD">
    <div class="ch-item">
      <DropDown :items="pullLabels" :initial-label="selectedPullLabel" placeholder="지역을 고르세요" @change="handlePullChange" />
      <div class="btngroup">
        <button class="btn-txt">수정</button>
        <button class="btn-txt">삭제</button>
      </div>
    </div>
    <button class="btn-mid round btn014">종목추천 풀 생성</button>
  </div>
</template>
<script>
import DropDown from '@/components/InputGroup/DropDown.vue'

export default {
  components: {
    DropDown
  },
  data() {
    return {
      pullLabels: [
        '1. 전문적으로 투자하고 있는 리스크 장기 감수형 - 100종목',
        '2. 전문적으로 투자하고 있는 리스크 장기 감수형 - 200종목',
        '3. 전문적으로 투자하고 있는 리스크 장기 감수형 - 300종목'
      ],
      selectedPullLabel: '1. 전문적으로 투자하고 있는 리스크 장기 감수형 - 100종목' // 초기 선택 값 없음
    }
  },
  methods: {
    handlePullChange(label) {
      this.selectedAreaLabel = label
      console.log('지역 변경:', label)
    }
  }
}
</script>
<style scoped>
.stockRD {
  @apply flex w-full justify-between items-center;
}
.ch-item{
  @apply flex w-[1084px] items-center gap-4
}
.ch-item .dropdown_w{
  @apply w-[990px] p-[12px_10px_12px_20px]
}
.ch-item .dropdown_w button{
  @apply text-[19px] text-[#141414]
}
.ch-item .dropdown_w::v-deep ul li{
  @apply h-10 leading-10 px-2.5
}
.ch-item .btngroup{
  @apply flex gap-4 items-center
}
.ch-item .btngroup button{
  @apply text-[16px] w-fit
}
</style>
