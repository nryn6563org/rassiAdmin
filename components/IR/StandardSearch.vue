<template>
  <div class="searchTable">
    <table width="100%">
      <colgroup>
        <col width="107" />
        <col width="*" />
      </colgroup>
      <tbody>
        <tr>
          <th>검색기간</th>
          <td>
            <DropDown :items="dateLabels" :initial-label="selectedDateLabel" :placeholder="selectedDateLabel" @change="handleDateChange" />
            <DateInput />
            <span>~</span>
            <DateInput />
            <DateArray :date-btns="dateBtns" :modelValue.sync="updateBtn" />
            <ResetBtn />
          </td>
        </tr>
        <tr>
          <th>검색조건</th>
          <td>
            <SearchInput />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import DateInput from '@/components/InputGroup/DateInput.vue'
import DropDown from '@/components/InputGroup/DropDown.vue'
import DateArray from '@/components/InputGroup/DateArray.vue'
import ResetBtn from '@/components/InputGroup/ResetBtn.vue'
import SearchInput from '@/components/InputGroup/SearchInput.vue'

export default {
  components: {
    DropDown,
    DateInput,
    DateArray,
    SearchInput,
    ResetBtn
  },
  data() {
    return {
      dateLabels: ['등록일시', '종목추천발생'],
      dateBtns: ['전체', '오늘', '어제', '지난주', '이번주', '1개월', '3개월', '6개월'],
      selectedDateLabel: '등록일시', // 현재 선택된 검색 조건 레이블
      updateBtn: 0 // DateArray에서 선택된 버튼의 인덱스를 저장
    }
  },
  methods: {
    handleDateChange(label) {
      this.selectedDateLabel = label
    }
  }
}
</script>
<style scoped>
/* 기존 스타일은 유지 */
.searchTable .dropdown_w {
  @apply w-[133px] p-2.5 mr-2.5;
}
.searchTable .dropdown_w::v-deep button {
  @apply text-[16px] text-[#5E6367];
}
.searchTable .dropdown_w::v-deep ul {
  @apply w-[153px] left-auto right-0;
}
.searchTable .dropdown_w::v-deep ul li {
  @apply h-8 leading-8 px-2.5;
}
.searchTable tbody td {
  @apply flex items-center;
}
.searchTable tbody td span {
  @apply mx-[6px];
}
.searchTable .dateArray {
  @apply mx-2.5;
}
</style>
