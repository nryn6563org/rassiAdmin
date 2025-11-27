<template>
  <h2 class="title">{{ title }}</h2>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // Vuex Store의 getPageTitle 게터를 title로 매핑
    ...mapGetters({
      title: 'getPageTitle' // 'getPageTitle' 게터를 'title' computed 속성에 매핑
    })
  }
}
</script>

<style scoped>
.title{
  @apply text-[24px] font-semibold text-[#141414] w-full pb-4 border-b-[1px] border-[#E0E0E0]
}
</style>