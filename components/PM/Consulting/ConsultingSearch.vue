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
            <DropDown ref="searchDrop" :items="searchLabels" :initial-label="selectedSearchLabel" :placeholder="'조건 선택'" @change="handleSearchChange" @opened="closeOtherDropdowns('searchDrop')" />
            <DropDown ref="statusDrop" :items="statusLabels" :initial-label="selectedStatusLabel" :placeholder="'상태 선택'" @change="handleStatusChange" @opened="closeOtherDropdowns('statusDrop')" />

            <span class="gubun"></span>

            <DropDown ref="choiceDrop" :items="choiceLabels" :initial-label="selectedChoiceLabel" :placeholder="'상태 선택'" @change="handleChoiceChange" @opened="closeOtherDropdowns('choiceDrop')" />
            <SearchInput :searchLabel="'검색어를 입력해 주세요.'" :items="fruitList" v-model="selectedFruit" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DateInput from '@/components/InputGroup/DateInput.vue'
import DropDown from '@/components/InputGroup/DropDown.vue' // 이전에 만든 PullDropDown 컴포넌트
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
      // 1. 검색 기간 관련 데이터
      dateLabels: ['등록일시'],
      selectedDateLabel: '등록일시',

      dateBtns: ['전체', '오늘', '어제', '지난주', '이번주', '1개월', '3개월', '6개월'],
      updateBtn: 0,

      // 2. 검색 조건(1) 관련 데이터 (ArrayLabels 대체)
      searchLabels: ['회원구분', '잠재고객', '유료고객'],
      selectedSearchLabel: '회원구분',

      // 3. 검색 조건(2) 관련 데이터 (두 번째 빈 DropDown용)
      statusLabels: ['공개여부', '전체공개', '비밀글'],
      selectedStatusLabel: '공개여부',

      // 3. 검색 조건(2) 관련 데이터 (두 번째 빈 DropDown용)
      choiceLabels: ['제목', '문의자명', '상담자명'],
      selectedChoiceLabel: '제목',
      selectedFruit: '',
      fruitList: [
        'Apple',
        'aanana',
        'aherry',
        'aate',
        'alderberry',
        'aig',
        'arape',
        'aoneydew'
      ]
    }
  },
  methods: {
    // [추가] 다른 드롭다운 닫기 로직
    closeOtherDropdowns(activeRef) {
      // 관리할 드롭다운의 ref 이름 목록
      const dropdownRefs = ['dateDrop', 'searchDrop', 'statusDrop']

      dropdownRefs.forEach((refName) => {
        // 현재 열린(activeRef) 드롭다운이 아니면 닫기 함수 실행
        if (refName !== activeRef && this.$refs[refName]) {
          // DropDown 컴포넌트 내부의 closeDropdown 메서드를 직접 호출
          this.$refs[refName].closeDropdown()
        }
      })
    },
    // 1. 날짜 기준 변경 핸들러
    handleDateChange(label) {
      this.selectedDateLabel = label
    },

    // 2. 검색 조건 변경 핸들러
    handleSearchChange(label) {
      this.selectedSearchLabel = label
    },

    // 3. 상태 조건 변경 핸들러
    handleStatusChange(label) {
      this.selectedStatusLabel = label
    },

    handleChoiceChange(label) {
      this.selectedChoiceLabel = label
    }
  }
}
</script>

<style scoped>
/* 기존 스타일 유지 */
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
</style>
