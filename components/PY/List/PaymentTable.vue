<template>
  <div class="table_w">
    <div class="table" ref="tableContainer">
      <table :style="{ width: tableStyleWidth }">
        <colgroup>
          <col v-for="(width, index) in currentColWidths" :key="index" :width="width" />
        </colgroup>
        <BasicThead :theadList="headerData" />
        <PaymentTbody :tbodyLists="bodyData" />
      </table>
    </div>

    <BasicPaging />
  </div>
</template>

<script>
import BasicThead from '@/components/TableElement/BasicThead.vue'
import PaymentTbody from '@/components/PY/List/PaymentTbody.vue'
import BasicPaging from '@/components/TableElement/BasicPaging.vue'

export default {
  components: {
    BasicThead,
    PaymentTbody,
    BasicPaging
  },
  data() {
    return {
      headerData: ['No.', '결제일시', '아이디', '이름', '이용기간', '상태', '결제번호', '결제채널', '결제금액', '상품명', '결제구분', '구독여부', '환불처리', '자문계약서', '투자권유문서'],
      originColWidths: [60, 150, 160, 100, 250, 80, 100, 120, 100, 300, 100, 100, 120, 100, 100],
      currentColWidths: [],
      tableStyleWidth: '100%',
      bodyData: [
        {
          ListNumber: 100,
          PaymentDate: '2026.01.02 12:43',
          UserId: '0000396546@nv',
          UserName: '홍*동',
          Term: '2026.01.02 ~ 2026.01.02',
          Status: '이용중',
          PaymentNo: '112733',
          Channel: 'AOS(CH10)',
          Amount: '187,000',
          ProductName: '종목추천 정기결제(15% 할인) [실전매매대가]',
          Type: '정기결제',
          Subscription: '구독취소 (2026.03.09)',
          Refund: '-999,999,999원 (2026.03.09)',
          HasContract: true,
          HasProposal: true
        },
        {
          ListNumber: 99,
          PaymentDate: '2026.01.02 12:43',
          UserId: '0000396546@nv',
          UserName: '김박*래',
          Term: '2026.01.02 ~ 2026.01.02',
          Status: '이용중',
          PaymentNo: '123423',
          Channel: 'iOS(CH20)',
          Amount: '187,000',
          ProductName: '종목추천 정기결제(15% 할인) [퀀트매니저]',
          Type: '단건결제',
          Subscription: '-',
          Refund: '-',
          HasContract: false,
          HasProposal: false
        }
      ]
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
      const newWidths = [...this.originColWidths]

      if (totalColWidth < containerWidth) {
        // Find the widest column (ProductName at index 9) or largest fixed width to expand
        newWidths[9] = '*'
        this.tableStyleWidth = '100%'
      } else {
        this.tableStyleWidth = `${totalColWidth}px`
      }
      this.currentColWidths = newWidths
    }
  }
}
</script>

<style scoped>
.table_w {
  @apply mt-4;
}
.table {
  @apply overflow-x-auto w-full;
}
table {
  @apply table-fixed border-collapse min-w-full;
}
</style>
