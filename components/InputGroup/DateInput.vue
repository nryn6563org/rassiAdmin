<template>
  <div class="date">
    <input
      type="date"
      name=""
      id=""
      class="customDate"
      ref="dateInput"
      data-placeholder="날짜 선택"
      :value="currentDate"
    >
  </div>
</template>

<script>
export default {
  // 컴포넌트 데이터 설정
  data() {
    return {
      // ISO 문자열을 'yyyy-mm-dd' 형식으로 변환하여 현재 날짜 설정
      currentDate: this.getTodayDateString()
    }
  },

  // 컴포넌트가 마운트된 후 (DOM이 준비된 후) 실행
  mounted() {
    // 1. input 요소에 change 이벤트 리스너 설정
    this.setupChangeEventListener()
    // 2. 초기 로딩 시 data-placeholder를 현재 날짜로 설정
    this.setupInitialPlaceholder()
  },

  methods: {
    // 'yyyy-mm-dd' 형식의 현재 날짜 문자열을 반환하는 헬퍼 함수
    getTodayDateString() {
      const today = new Date()
      // Date 객체의 getTimezoneOffset()을 사용하여 현재 시간대의 UTC 시차를 보정하고,
      // 'YYYY-MM-DDTHH:mm:ss.sssZ' 형식의 문자열을 생성한 후,
      // T 앞의 'yyyy-mm-dd' 부분만 잘라냅니다.
      // 이렇게 하면 브라우저의 시간대와 상관없이 'yyyy-mm-dd'를 정확하게 얻을 수 있습니다.
      return new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toISOString().split('T')[0]
    },

    // change 이벤트 리스너 설정
    setupChangeEventListener() {
      const dateInput = this.$refs.dateInput

      dateInput.addEventListener('change', (e) => {
        const dateVal = e.target.value // 'yyyy-mm-dd' 형식
        this.updatePlaceholder(dateInput, dateVal)
      })
    },

    // 초기 data-placeholder 설정
    setupInitialPlaceholder() {
      const dateInput = this.$refs.dateInput
      // data의 currentDate (초기값)을 사용하여 placeholder 설정
      this.updatePlaceholder(dateInput, this.currentDate)
    },

    // data-placeholder를 업데이트하는 공통 로직
    updatePlaceholder(dateInput, dateVal) {
      if (dateVal) {
        // 'yyyy-mm-dd'를 [yyyy, mm, dd]로 분리
        const [year, month, day] = dateVal.split('-')

        // 'yy-mm-dd' 형식으로 변환 (예: 2025 -> 25)
        const formattedDate = `${year.slice(2)}-${month}-${day}`

        // data-placeholder 속성 업데이트 (CSS가 이 값을 화면에 표시함)
        dateInput.setAttribute('data-placeholder', formattedDate)
      } else {
        // 값이 없는 경우 '날짜 선택'으로 초기화
        dateInput.setAttribute('data-placeholder', '날짜 선택')
      }
    }
  }
}
</script>

<style scoped>
.customDate {
  /* 기본 스타일 초기화 */
  appearance: none;
  -webkit-appearance: none;

  /* 디자인 커스텀 */
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  padding: 10px 12px;
  font-family: sans-serif;
  font-size: 14px;
  color: #333;
  background-color: white;
}

/* 포커스 효과 */
.customDate:focus {
  outline: none;
  border-color: #4A90E2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
}

/* 기본 캘린더 아이콘 커스텀 (Chrome, Edge, Safari 등) */
.customDate::-webkit-calendar-picker-indicator {
  /* 배경 이미지로 원하는 아이콘 넣기 */
  background-image: url('~/assets/img/ico_cal.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  cursor: pointer;

  /* 아이콘 위치 미세 조정이 필요할 경우 */
  /* margin-left: 10px; */
}
</style>