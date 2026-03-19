<template>
  <section>
    <div class="content-body">
      <PaymentSearch />
      <PaymentTableInfo />
      <PaymentTable />
    </div>
  </section>
</template>

<script>
import PaymentSearch from '@/components/PY/List/PaymentSearch.vue'
import PaymentTableInfo from '@/components/PY/List/PaymentTableInfo.vue'
import PaymentTable from '@/components/PY/List/PaymentTable.vue'

export default {
  components: {
    PaymentSearch,
    PaymentTableInfo,
    PaymentTable
  },
  data() {
    return {
      pageSpecificTitle: '결제 회원 리스트'
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
