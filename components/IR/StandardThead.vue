<template>
  <thead>
    <tr>
      <th v-for="(item, index) in theadList" :key="index">
        <template v-if="index === 0">
          <label for="checkAll" class="custom-checkbox-label">
            <input id="checkAll" class="custom-checkbox-input" type="checkbox" :checked="isAllChecked" @change="$emit('toggle-all', $event.target.checked)" />
            <span class="custom-checkbox-box"></span>
          </label>
        </template>
        <template v-else>
          {{ item }}
        </template>
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  props: {
    theadList: { type: Array, default: () => [] },
    isAllChecked: { type: Boolean, default: false } // props 추가
  }
}
</script>
