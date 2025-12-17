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

    <div v-if="isOpen" class="dropdown-menu" role="menu">
      <draggable v-model="localItems" tag="ul" :animation="200" @end="onDragEnd">
        <li v-for="(label, index) in localItems" :key="index" class="menu-item" :class="{ selected: label === selectedLabel }" @click="selectItem(label)" role="menuitem">
          {{ label }}
        </li>
      </draggable>

      <div class="info">
        <span>전체 풀 : <em>10</em></span>
        <span>전체 종목 : <em>100</em></span>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable' // 라이브러리 import

const clickOutside = {
  mounted(el, binding) {
    el.__ClickOutsideHandler__ = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.addEventListener('click', el.__ClickOutsideHandler__)
  },
  unmounted(el) {
    document.removeEventListener('click', el.__ClickOutsideHandler__)
  }
}

export default {
  components: {
    draggable // 컴포넌트 등록
  },
  directives: {
    clickOutside
  },

  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    placeholder: {
      type: String,
      default: '항목을 선택하세요'
    },
    initialLabel: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      isOpen: false,
      selectedLabel: this.initialLabel,
      // props인 items를 직접 수정할 수 없으므로 로컬 변수 생성
      localItems: []
    }
  },

  watch: {
    initialLabel(newLabel) {
      this.selectedLabel = newLabel
    },
    // 부모로부터 items가 변경되면 로컬 데이터도 동기화
    items: {
      immediate: true,
      handler(newItems) {
        // 배열 복사 (참조 끊기)
        this.localItems = [...newItems]
      }
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
      this.selectedLabel = label
      this.isOpen = false
      this.$emit('change', label)
    },

    // 드래그가 끝났을 때 호출되는 메서드
    onDragEnd() {
      // 변경된 순서의 배열을 부모에게 알림 (필요한 경우)
      // 부모 컴포넌트에서 @update:items="items = $event" 와 같이 받아주면 됩니다.
      this.$emit('update-order', this.localItems)
    }
  }
}
</script>

<style scoped>
.dropdown_w {
  @apply relative border-[1px] border-[#E3E3E3] rounded-[6px];
}
.dropdown_w > button {
  @apply flex w-full justify-between items-center;
}
.dropdown_w > button span {
  @apply transition-all duration-200;
}
.dropdown_w > button span.rotate {
  @apply transform rotate-180;
}
.dropdown-menu {
  @apply absolute w-full max-h-[500px] top-[calc(100%+3px)] left-0 p-2.5 bg-white border-[1px] border-[#E3E3E3] rounded-[6px] flex flex-col gap-[2px] z-50 overflow-y-auto;
}

/* 기존 .dropdown-menu ul 스타일을 draggable(렌더링 시 ul이 됨)에 적용 */
.dropdown-menu ul {
  @apply h-[450px] overflow-y-auto flex flex-col gap-1;
}

.dropdown-menu li {
  @apply w-[calc(100%-15px)] text-[16px] text-[#5E6367] cursor-pointer rounded-[6px]
  hover:bg-[#EBF8FF];
}

/* 드래그 중인 아이템 스타일 (선택 사항) */
.sortable-ghost {
  @apply bg-blue-100 opacity-50;
}

.dropdown-menu .info {
  @apply w-full flex items-center h-10 p-2.5 rounded-[3px] bg-[#F9FAFB];
}
.dropdown-menu .info span {
  @apply relative z-20 text-[18px] h-5 leading-5 text-[#5E6367] mr-3 pl-3 first:pl-0
  last:border-l-[1px] last:border-[#484F55];
}
.dropdown-menu .info span em {
  @apply text-[#3c68cd] font-bold;
}
</style>
