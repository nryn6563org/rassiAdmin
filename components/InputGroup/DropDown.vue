<template>
  <div class="dropdown_w" ref="dropdown" v-click-outside="closeDropdown">
    <button class="dropdown-button" @click="toggleDropdown" :aria-expanded="isOpen">
      {{ selectedLabel || placeholder }}
      <span class="arrow-icon" :class="{ rotate: isOpen }">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 7L9.5 12L14.5 7" stroke="#5E6367" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </button>

    <ul v-if="isOpen" class="dropdown-menu" role="menu">
      <li v-for="(label, index) in items" :key="index" class="menu-item" :class="{ selected: label === selectedLabel }" @click="selectItem(label)" role="menuitem">
        {{ label }}
      </li>
    </ul>
  </div>
</template>

<script>
// 외부 클릭을 감지하기 위한 간단한 커스텀 디렉티브 (이전과 동일)
const clickOutside = {
  mounted(el, binding) {
    el.__ClickOutsideHandler__ = (event) => {
      // 드롭다운 wrapper 자체가 아니며, wrapper의 자식 요소도 아닌 경우
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event) // 바인딩된 메소드 (closeDropdown) 실행
      }
    }
    document.addEventListener('click', el.__ClickOutsideHandler__)
  },
  unmounted(el) {
    document.removeEventListener('click', el.__ClickOutsideHandler__)
  }
}

export default {
  // 외부 클릭 디렉티브 등록
  directives: {
    clickOutside
  },

  props: {
    // 드롭다운 목록: 이제 단순한 문자열 배열을 받습니다. (예: ['빨강', '파랑', '초록'])
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    // 드롭다운에 표시할 기본 텍스트
    placeholder: {
      type: String,
      default: '항목을 선택하세요'
    },
    // 외부에서 초기 선택 Label을 받을 수 있도록 수정 (선택 사항)
    initialLabel: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      isOpen: false, // 드롭다운 메뉴 열림/닫힘 상태
      selectedLabel: this.initialLabel // 현재 선택된 항목의 label
    }
  },

  watch: {
    // initialLabel이 변경될 때마다 selectedLabel을 업데이트
    initialLabel(newLabel) {
      this.selectedLabel = newLabel
    }
  },

  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen

      // [추가] 드롭다운이 열렸을 때만 부모에게 알림 이벤트를 보냄
      if (this.isOpen) {
        this.$emit('opened')
      }
    },

    closeDropdown() {
      this.isOpen = false
    },

    selectItem(label) {
      this.selectedLabel = label // 내부 상태 업데이트
      this.isOpen = false // 선택 후 드롭다운 닫기

      // 부모 컴포넌트로 선택된 항목의 label만 전달
      this.$emit('change', label)
    }
  }
}
</script>

<style scoped>
.dropdown_w{
  @apply relative border-[1px] border-[#E3E3E3] rounded-[6px]
}
.dropdown_w > button{
  @apply flex w-full justify-between items-center
}
.dropdown_w > button span{
  @apply transition-all duration-200
}
.dropdown_w > button span.rotate{
  @apply transform rotate-180
}
.dropdown-menu{
  @apply absolute w-full max-h-[440px] top-[calc(100%+3px)] left-0 p-2.5 bg-white border-[1px] border-[#E3E3E3] rounded-[6px] flex flex-col gap-[2px] z-50 overflow-y-auto
}
.dropdown-menu li{
  @apply text-[16px] text-[#5E6367] cursor-pointer rounded-[6px]
  hover:bg-[#5E6367] hover:text-white
}
</style>
