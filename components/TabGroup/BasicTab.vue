<template>
  <div class="tab tab-basic">
    <button v-for="(tab, tabIndex) in tabs" :key="tabIndex" :class="{ active: modelValue === tabIndex }" @click="selectTab(tabIndex)">
      <span>{{ tab }}</span>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    // 부모로부터 현재 선택된 탭의 인덱스를 받음 (v-model 사용 시 이름은 modelValue)
    modelValue: {
      type: Number,
      default: 0
    }
  },
  methods: {
    selectTab(index) {
      // 부모에게 값을 업데이트해달라고 요청
      this.$emit('update:modelValue', index)
    }
  }
}
</script>
