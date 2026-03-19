<template>
  <section>
    <div class="content-body">
      <PaymentStatsSearch />
      <PaymentTableInfo />
      <PaymentStatsTable />
    </div>
  </section>
</template>

<script>
import PaymentStatsSearch from '@/components/PY/Stats/PaymentStatsSearch.vue'
import PaymentTableInfo from '@/components/PY/List/PaymentTableInfo.vue'
import PaymentStatsTable from '@/components/PY/Stats/PaymentStatsTable.vue'

export default {
  components: {
    PaymentStatsSearch,
    PaymentTableInfo,
    PaymentStatsTable
  },
  data() {
    return {
      pageSpecificTitle: '결제 통계'
    }
  },
  head() {
    return {
      title: `${this.pageSpecificTitle}`
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', this.pageSpecificTitle)
  }
}
</script>

<style scoped>
section {
  @apply pt-[30px]
}
.placeholder-card {
  @apply w-full h-[400px] flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg text-gray-400
}
</style>
