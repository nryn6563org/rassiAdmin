<template>
  <div id="wrap">
    <RassiHeader />
    <RassiLNB />
    <div id="container">
      <AdminPageTitle />
      <nuxt />
    </div>
    <StandardModal />
  </div>
</template>
<script>
import AdminPageTitle from '../components/AdminPageTitle.vue'
import RassiLNB from '~/components/RassiLNB.vue'
import RassiHeader from '~/components/RassiHeader.vue'
import StandardModal from '~/components/Modal/DefaultModal.vue'
export default {
  components: {
    RassiHeader,
    RassiLNB,
    AdminPageTitle,
    StandardModal
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
