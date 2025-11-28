<template>
  <div class="searchTable">
    <table>
      <colgroup>
        <col width="107" />
        <col width="*" />
      </colgroup>
      <tbody>
        <tr>
          <th>검색기간</th>
          <td>
            <DropDown :items="areaLabels" :initial-label="selectedAreaLabel" placeholder="지역을 고르세요" @change="handleAreaChange" />
            <DateInput />
            <DateInput />
          </td>
        </tr>
        <tr>
          <th>검색조건</th>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import DateInput from '@/components/InputGroup/DateInput.vue'
import DropDown from '@/components/InputGroup/DropDown.vue'

export default {
  components: {
    DropDown,
    DateInput
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
