<template>
  <div class="stockRD">
    <div class="ch-item">
      <DropDown :items="areaLabels" :initial-label="selectedAreaLabel" placeholder="지역을 고르세요" @change="handleAreaChange" />
      <div class="btngroup">
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
    <button>종목추천 풀 생성</button>
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
      areaLabels: ['서울', '부산', '대구', '인천'],
      selectedAreaLabel: null // 초기 선택 값 없음
    }
  },
  methods: {
    handleAreaChange(label) {
      this.selectedAreaLabel = label
      console.log('지역 변경:', label)
    }
  }
}
</script>
