<template>
  <thead>
    <tr>
      <th v-for="(thead, theadIndex) in theadList" :key="theadIndex">
        {{ thead }}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  // data() 삭제
  props: {
    theadList: {
      type: Array,
      default: () => []
    }
  }
}
</script>