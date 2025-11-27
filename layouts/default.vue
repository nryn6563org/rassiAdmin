<template>
  <div id="wrap">
    <RassiHeader />
    <RassiLNB />
    <div id="container">
      <AdminPageTitle />
      <nuxt />
    </div>
  </div>
</template>
<script>
import AdminPageTitle from '../components/AdminPageTitle.vue'
import RassiLNB from '~/components/RassiLNB.vue'
import RassiHeader from '~/components/RassiHeader.vue'

export default {
  components: {
    RassiHeader,
    RassiLNB,
    AdminPageTitle
  }
}
</script>

<style scoped>
#wrap {
  @apply fixed inset-0 flex flex-wrap items-start justify-start w-full h-full;
}
#container {
  @apply relative w-[calc(100%-262px)] h-[calc(100%-71px)] p-[30px_33px] overflow-y-auto;
}
</style>
