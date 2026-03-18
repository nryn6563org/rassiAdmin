<template>
  <div class="tableInfo">
    <div class="lft">
      <div class="totalScore">
        <span>총&nbsp;<em>{{ total }}</em>&nbsp;건</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: '100'
    }
  }
}
</script>

<style scoped>
.tableInfo {
  @apply flex w-full justify-between items-center mt-10;
}
.tableInfo .lft {
  @apply flex items-center gap-4;
}
.tableInfo .lft .totalScore {
  @apply text-[20px] text-[#141414];
}
.tableInfo .lft .totalScore span em {
  @apply text-[#0263E8] font-bold;
}
</style>
