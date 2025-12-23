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
export default {
  directives: {
    'click-outside': {
      bind(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
          // 클릭된 요소가 드롭다운 내부가 아닐 경우에만 메서드 실행
          if (!(el === event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event)
          }
        }
        document.body.addEventListener('click', el.clickOutsideEvent)
      },
      unbind(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
      }
    }
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
      selectedLabel: this.initialLabel
    }
  },

  watch: {
    initialLabel(newLabel) {
      this.selectedLabel = newLabel
    }
  },

  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
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
