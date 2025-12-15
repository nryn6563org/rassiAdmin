<template>
  <div class="schInput" ref="wrapper">
    <label for="schInput">
      <input
        type="text"
        id="schInput"
        autocomplete="off"
        :placeholder="searchLabel"
        :value="value"
        @input="onInput"
        @focus="isOpen = true"
        @keydown.down.prevent="onArrowDown"
        @keydown.up.prevent="onArrowUp"
        @keydown.enter.prevent="onEnter"
      />
      <button type="submit">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="26" height="26" transform="matrix(-1 0 0 1 26 0)" fill="url(#pattern0_987_30357)" />
          <defs>
            <pattern id="pattern0_987_30357" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_987_30357" transform="scale(0.03125)" />
            </pattern>
            <image
              id="image0_987_30357"
              width="32"
              height="32"
              preserveAspectRatio="none"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABy0lEQVR4nO1WS0oDQRAdlLjxs1U8gnoH9QL+MOoJRqz3eqKGrHsn4jH8nscPGn+QA7iRZKEbIxUrMGYRnR41CHnQhGH61Xupqq7pKOrjv8J7PyQiawBOAVQBNGxVSZ7oO93zK+IkV0g+kmx2WwAeACz/mLD3fgDAQUrknGTinJsql8vDukRkGkCJ5EVq375ycxuAiQN4IbnZLai+E5Et29sy8RNpb2pA59xsBtNzKRNLQeLe+6FUzTez8kmKce/jOC5kNiAia+2ah9SyWCwOArjUGM651cwGSJ5Z+l0UCADbFuM4xMCtuZ8KNaCnwwxUQwzUlSwiI6EGKpXKqJWxnpkMoJHXgHNuzDLwnJlMOwF5SpAkyUxwCQCcGrkUagDArpXgMIS8YeSL0GNI8ir4GMZxXCBZsz7YysrnBzSDd0GDSCEii+1RrOM1+iacc/MAXkm+AViIQiEiEySfUh8j0dR+kXaauJZvL5c4gBsL1DJhRi51wumQ0SOqy7p9p11z/ecqHvw5lpS4/uqzlaP2jQvJXe60o0O8ozHX9fplN5+GTcxrAEfa7cENp0iSZLydRrvzTUZ/haQvzh6Id0ysTw33pwCAnon3EfUA70nzm/MsCZH5AAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>
      </button>
    </label>
    <ul v-if="isOpen && filteredItems.length > 0" class="suggestions-list">
      <li
        v-for="(item, index) in filteredItems"
        :key="index"
        :class="{ 'is-active': index === arrowCounter }"
        @click="selectItem(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // 1. Props: 부모 컴포넌트로부터 전달받는 데이터 정의
  props: {
    // 입력창 placeholder 텍스트
    searchLabel: { type: String, default: '종목명 또는 종목코드 검색' },
    // 검색 대상이 될 전체 리스트 데이터
    items: { type: Array, required: true, default: () => [] },
    // v-model로 바인딩된 사용자의 입력값
    value: { type: String, default: '' }
  },

  // 2. Data: 컴포넌트 내부에서 관리하는 상태 값
  data() {
    return {
      isOpen: false, // 자동완성 목록(드롭다운) 표시 여부 (true: 보임, false: 숨김)
      arrowCounter: -1 // 키보드 방향키 이동 시 현재 선택된 항목의 인덱스 (-1은 선택 안 됨)
    }
  },

  // 3. Computed: 데이터 변화에 따라 실시간으로 계산되는 속성
  computed: {
    // 사용자가 입력한 값(value)을 기준으로 items를 필터링하여 반환
    filteredItems() {
      // 입력값이 없으면 빈 배열 반환 (목록 안 보여줌)
      if (!this.value) { return [] }

      // 대소문자 구분 없이 입력값이 포함된 항목만 필터링
      return this.items.filter(item =>
        item.toLowerCase().includes(this.value.toLowerCase())
      )
    }
  },

  // 4. Lifecycle Hooks: 컴포넌트 생명주기 관련 로직
  mounted() {
    // 컴포넌트가 화면에 그려진 후, 외부 클릭 감지를 위한 이벤트 리스너 등록
    document.addEventListener('click', this.handleClickOutside)
  },
  destroyed() {
    // 컴포넌트가 제거되기 전, 메모리 누수 방지를 위해 이벤트 리스너 제거
    document.removeEventListener('click', this.handleClickOutside)
  },

  // 5. Methods: 컴포넌트의 동작 함수들
  methods: {
    // 입력창에 값을 입력할 때 실행되는 함수
    onInput(event) {
      this.$emit('input', event.target.value) // 부모 컴포넌트에 입력값 전달 (v-model 업데이트)
      this.isOpen = true // 목록 열기
      this.arrowCounter = -1 // 키보드 선택 위치 초기화
    },

    // 목록에서 항목을 클릭하거나 엔터키로 선택했을 때 실행되는 함수
    selectItem(item) {
      this.$emit('input', item) // 선택된 항목을 부모 컴포넌트로 전달
      this.isOpen = false // 목록 닫기
      this.arrowCounter = -1 // 키보드 선택 위치 초기화
    },

    // 컴포넌트 외부를 클릭했는지 감지하는 함수
    handleClickOutside(event) {
      // ref="wrapper"로 지정된 영역(현재 컴포넌트) 바깥을 클릭했다면 목록을 닫음
      if (this.$refs.wrapper && !this.$refs.wrapper.contains(event.target)) {
        this.isOpen = false
        this.arrowCounter = -1
      }
    },

    // 키보드 '아래' 화살표 눌렀을 때
    onArrowDown() {
      // 목록의 마지막 항목이 아니라면 인덱스 증가 (아래로 이동)
      if (this.arrowCounter < this.filteredItems.length - 1) {
        this.arrowCounter++
      }
    },

    // 키보드 '위' 화살표 눌렀을 때
    onArrowUp() {
      // 첫 번째 항목보다 아래에 있다면 인덱스 감소 (위로 이동)
      if (this.arrowCounter > 0) {
        this.arrowCounter--
      }
    },

    // 키보드 '엔터' 키 눌렀을 때
    onEnter() {
      // 키보드로 선택된 항목이 있다면 해당 항목 선택 처리
      if (this.arrowCounter >= 0) {
        this.selectItem(this.filteredItems[this.arrowCounter])
      }
    }
  }
}
</script>

<style scoped>
.schInput {
  @apply relative
}
.schInput label {
  @apply flex items-center gap-2;
}
.schInput input {
  @apply w-[450px] h-10 p-2.5 border-[1px] border-[#E3E3E3] text-[16px] text-[#5E6367] rounded-[6px];
}
.schInput input::placeholder {
  @apply text-[16px] text-[#9E9E9E];
}
.schInput button {
  @apply h-10 rounded-[6px] w-[70px] text-[16px] justify-center border-none cursor-pointer;
}
.suggestions-list {
  @apply absolute top-[100%] left-0 min-w-[450px] h-[300px] border-[1px] border-[#e3e3e3] bg-white list-none mt-1 overflow-y-auto z-[100] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-[6px]
}
.suggestions-list li {
  @apply p-2.5 text-left text-[16px] text-[#5E6367] cursor-pointer
}
.suggestions-list li:hover,
.suggestions-list li.is-active {
  @apply bg-[#447AEC] text-white
}
</style>
