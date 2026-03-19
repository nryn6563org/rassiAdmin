<template>
  <div class="table_w">
    <div class="table" ref="tableContainer">
      <table>
        <colgroup>
          <col v-for="(width, index) in originColWidths" :key="index" :width="width" />
        </colgroup>
        <thead>
          <tr>
            <th rowspan="2" class="bg-date-t !border-r">결제일</th>
            <th colspan="4" class="bg-group border-r">정기결제</th>
            <th colspan="4" class="bg-group border-r">단건결제</th>
            <th colspan="4" class="bg-group border-r">무통장결제</th>
            <th colspan="4" class="bg-total">합계</th>
          </tr>
          <tr>
            <th class="border-none">결제금액</th>
            <th class="border-none">결제건수</th>
            <th class="border-none">환불금액</th>
            <th class="group-end-border">환불건수</th>
            <th class="border-none">결제금액</th>
            <th class="border-none">결제건수</th>
            <th class="border-none">환불금액</th>
            <th class="group-end-border">환불건수</th>
            <th class="border-none">결제금액</th>
            <th class="border-none">결제건수</th>
            <th class="border-none">환불금액</th>
            <th class="group-end-border">환불건수</th>
            <th class="border-none">결제금액</th>
            <th class="border-none">결제건수</th>
            <th class="border-none">환불금액</th>
            <th class="group-end-border">환불건수</th>
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
      originColWidths: [140, 120, 80, 120, 80, 120, 80, 120, 80, 120, 80, 120, 80, 120, 80, 120, 80],
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
  @apply table-fixed border-collapse w-full min-w-[1560px];
}
thead th {
  @apply h-[40px] text-[14px] font-semibold text-[#5E6367] border-r border-b border-[#eaeaea] last:border-r-0;
}
::v-deep .bg-date-t {
  @apply !bg-[#E9E9E9];
}
::v-deep .bg-group {
  @apply !bg-[#E6EAED];
  border-right: 1px solid #cfcfcf !important;
}
::v-deep .group-end-border {
  border-right: 1px solid #cfcfcf !important;
}
::v-deep .bg-sub {
  @apply !bg-[#E9E9E9];
}
::v-deep .bg-total {
  @apply !bg-[#F7F3DD];
}
</style>
