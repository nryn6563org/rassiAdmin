<template>
  <div class="searchTable">
    <table width="100%">
      <colgroup>
        <col width="107" />
        <col width="*" />
      </colgroup>
      <tbody>
        <tr>
          <th><span>검색기간</span></th>
          <td>
            <DropDown ref="dateDrop" :items="dateLabels" :initial-label="selectedDateLabel" :placeholder="'선택'" @change="handleDateChange" @opened="closeOtherDropdowns('dateDrop')" />
            <DateInput />
            <span>~</span>
            <DateInput />
            <DateArray :date-btns="dateBtns" :modelValue.sync="updateBtn" />
            <ResetBtn />
          </td>
        </tr>

        <tr>
          <th><span>검색조건</span></th>
          <td>
            <DropDown ref="channelDrop" :items="channelLabels" :initial-label="selectedChannelLabel" :placeholder="'결제채널전체'" @change="handleChannelChange" @opened="closeOtherDropdowns('channelDrop')" />
            <DropDown ref="typeDrop" :items="typeLabels" :initial-label="selectedTypeLabel" :placeholder="'결제구분전체'" @change="handleTypeChange" @opened="closeOtherDropdowns('typeDrop')" />

            <span class="gubun"></span>

            <DropDown ref="searchDrop" :items="searchLabels" :initial-label="selectedSearchLabel" :placeholder="'아이디'" @change="handleSearchChange" @opened="closeOtherDropdowns('searchDrop')" />
            <SearchInput :searchLabel="'검색어를 입력해 주세요.'" :items="[]" v-model="searchText" />
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
      dateLabels: ['결제일시'],
      selectedDateLabel: '결제일시',
      dateBtns: ['전체', '오늘', '어제', '지난주', '이번주', '1개월', '3개월', '6개월'],
      updateBtn: 0,

      channelLabels: ['결제채널전체', 'AOS(CH10)', 'AOS(CH40)', 'iOS(CH20)', 'iOS(CH40)', 'TP-AOS', 'TP-PG', 'SYS갱신', '고객센터(CS)'],
      selectedChannelLabel: '결제채널전체',

      typeLabels: ['결제구분전체', '정기결제', '단건결제', '카드결제', '무통장입금', '무료체험'],
      selectedTypeLabel: '결제구분전체',

      searchLabels: ['아이디', '이름', '상품명', '엑스퍼트'],
      selectedSearchLabel: '아이디',
      searchText: ''
    }
  },
  methods: {
    closeOtherDropdowns(activeRef) {
      const dropdownRefs = ['dateDrop', 'channelDrop', 'typeDrop', 'searchDrop']
      dropdownRefs.forEach((refName) => {
        if (refName !== activeRef && this.$refs[refName]) {
          this.$refs[refName].closeDropdown()
        }
      })
    },
    handleDateChange(label) { this.selectedDateLabel = label },
    handleChannelChange(label) { this.selectedChannelLabel = label },
    handleTypeChange(label) { this.selectedTypeLabel = label },
    handleSearchChange(label) { this.selectedSearchLabel = label }
  }
}
</script>

<style scoped>
.searchTable .dropdown_w {
  @apply min-w-[133px] h-10 p-2.5 mr-2.5;
}
.searchTable .dropdown_w::v-deep button {
  @apply h-5 leading-5 text-[16px] text-[#5E6367];
}
.searchTable .dropdown_w::v-deep ul {
  @apply min-w-[153px] w-auto whitespace-nowrap left-auto right-0;
}
.searchTable .dropdown_w::v-deep ul li {
  @apply h-8 leading-8 px-2.5 block;
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
.gubun {
  @apply w-[1px] h-4 bg-[#484F55] !mr-2.5;
}
.searchTable tbody td .date::v-deep .customDate {
  @apply !p-[6px_12px];
}
.searchTable .btn-mid {
  @apply w-[80px];
}
</style>
