<template>
  <div class="table_w">
    <div class="table" ref="tableContainer">
      <table :style="{ width: tableStyleWidth }">
        <colgroup>
          <col v-for="(width, index) in currentColWidths" :key="index" :width="width" />
        </colgroup>
        <thead>
          <tr>
            <th rowspan="2" class="border-b">결제일</th>
            <th colspan="4" class="bg-[#F2F4F7] border-b border-r">정기결제</th>
            <th colspan="4" class="bg-[#F2F4F7] border-b border-r">단건결제</th>
            <th colspan="4" class="bg-[#F2F4F7] border-b border-r">무통장결제</th>
            <th colspan="4" class="bg-[#FFF9E5] border-b">합계</th>
          </tr>
          <tr>
            <th class="bg-[#F9FAFB]">결제금액</th>
            <th class="bg-[#F9FAFB]">결제건수</th>
            <th class="bg-[#F9FAFB]">환불금액</th>
            <th class="bg-[#F9FAFB] border-r">환불건수</th>
            <th class="bg-[#F9FAFB]">결제금액</th>
            <th class="bg-[#F9FAFB]">결제건수</th>
            <th class="bg-[#F9FAFB]">환불금액</th>
            <th class="bg-[#F9FAFB] border-r">환불건수</th>
            <th class="bg-[#F9FAFB]">결제금액</th>
            <th class="bg-[#F9FAFB]">결제건수</th>
            <th class="bg-[#F9FAFB]">환불금액</th>
            <th class="bg-[#F9FAFB] border-r">환불건수</th>
            <th class="bg-[#FFF9E5]">결제금액</th>
            <th class="bg-[#FFF9E5]">결제건수</th>
            <th class="bg-[#FFF9E5]">환불금액</th>
            <th class="bg-[#FFF9E5]">환불건수</th>
          </tr>
        </thead>
        <PaymentStatsTbody :tbodyLists="bodyData" :summary="summaryData" />
      </table>
    </div>
  </div>
</template>

<script>
import PaymentStatsTbody from './PaymentStatsTbody.vue'

export default {
  components: {
    PaymentStatsTbody
  },
  data() {
    const dummyCell = { amount: '999,187,000', count: '124', refundAmount: '999,187,000', refundCount: '22' }
    const totalCell = { amount: '999,187,000', count: '12', refundAmount: '999,187,000', refundCount: '12' }

    return {
      tableStyleWidth: '100%',
      originColWidths: [120, 100, 80, 100, 80, 100, 80, 100, 80, 100, 80, 100, 80, 100, 80, 100, 80],
      currentColWidths: [],
      bodyData: [
        {
          date: '2026.03.10',
          regular: { amount: '2,341,230', count: '80', refundAmount: '999,187,000', refundCount: '1' },
          single: dummyCell,
          wire: dummyCell,
          total: totalCell
        },
        {
          date: '2026.03.09',
          regular: { amount: '5,432,430', count: '83', refundAmount: '999,187,000', refundCount: '0' },
          single: dummyCell,
          wire: dummyCell,
          total: totalCell
        }
        // ... 생략
      ],
      summaryData: {
        regular: { amount: '9,187,000', count: '100', refundAmount: '999,187,000', refundCount: '12' },
        single: { amount: '4,187,000', count: '124', refundAmount: '999,187,000', refundCount: '22' },
        wire: { amount: '999,187,000', count: '4', refundAmount: '187,000', refundCount: '1' },
        total: { amount: '999,187,000', count: '224', refundAmount: '2,187,120', refundCount: '44' }
      }
    }
  },
  mounted() {
    this.adjustColumnWidths()
    this.resizeObserver = new ResizeObserver(() => {
      this.adjustColumnWidths()
    })
    if (this.$refs.tableContainer) {
      this.resizeObserver.observe(this.$refs.tableContainer)
    }
  },
  beforeDestroy() {
    if (this.resizeObserver && this.$refs.tableContainer) {
      this.resizeObserver.unobserve(this.$refs.tableContainer)
    }
  },
  methods: {
    adjustColumnWidths() {
      const container = this.$refs.tableContainer
      if (!container) {
        return
      }
      const containerWidth = container.clientWidth
      const totalColWidth = this.originColWidths.reduce((acc, curr) => acc + curr, 0)

      if (totalColWidth < containerWidth) {
        this.currentColWidths = this.originColWidths.map(() => '*')
        this.tableStyleWidth = '100%'
      } else {
        this.currentColWidths = this.originColWidths
        this.tableStyleWidth = `${totalColWidth}px`
      }
    }
  }
}
</script>

<style scoped>
.table_w {
  @apply mt-4;
}
.table {
  @apply overflow-x-auto w-full border border-[#eaeaea];
}
table {
  @apply table-fixed border-collapse min-w-full;
}
thead th {
  @apply h-[44px] text-[14px] font-semibold text-[#5E6367] border-r border-[#eaeaea] last:border-r-0;
}
</style>
