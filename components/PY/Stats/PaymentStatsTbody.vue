<template>
  <tbody>
    <tr v-for="(tbodyList, tbodyListIndex) in tbodyLists" :key="tbodyListIndex">
      <td class="bg-date"><div class="date"><span>{{ tbodyList.date }}</span></div></td>
      <!-- 정기결제 -->
      <td><div class="amount"><span>{{ tbodyList.regular.amount }}</span></div></td>
      <td><div class="count"><span>{{ tbodyList.regular.count }}</span></div></td>
      <td><div class="refundAmount"><span>{{ tbodyList.regular.refundAmount }}</span></div></td>
      <td class="group-end-border"><div class="refundCount"><span>{{ tbodyList.regular.refundCount }}</span></div></td>
      <!-- 단건결제 -->
      <td><div class="amount"><span>{{ tbodyList.single.amount }}</span></div></td>
      <td><div class="count"><span>{{ tbodyList.single.count }}</span></div></td>
      <td><div class="refundAmount"><span>{{ tbodyList.single.refundAmount }}</span></div></td>
      <td class="group-end-border"><div class="refundCount"><span>{{ tbodyList.single.refundCount }}</span></div></td>
      <!-- 무통장결제 -->
      <td><div class="amount"><span>{{ tbodyList.wire.amount }}</span></div></td>
      <td><div class="count"><span>{{ tbodyList.wire.count }}</span></div></td>
      <td><div class="refundAmount"><span>{{ tbodyList.wire.refundAmount }}</span></div></td>
      <td class="group-end-border"><div class="refundCount"><span>{{ tbodyList.wire.refundCount }}</span></div></td>
      <!-- 합계 -->
      <td><div class="amount"><span>{{ tbodyList.total.amount }}</span></div></td>
      <td><div class="count"><span>{{ tbodyList.total.count }}</span></div></td>
      <td><div class="refundAmount"><span>{{ tbodyList.total.refundAmount }}</span></div></td>
      <td class=""><div class="refundCount"><span>{{ tbodyList.total.refundCount }}</span></div></td>
    </tr>
    <!-- 합계 행 -->
    <tr class="summary-row" v-if="tbodyLists.length > 0">
      <td><div class="date"><span>합계</span></div></td>
      <td><div class="amount"><span>{{ summary.regular.amount }}</span></div></td>
      <td><div class="count"><span>{{ summary.regular.count }}</span></div></td>
      <td><div class="refundAmount"><span>{{ summary.regular.refundAmount }}</span></div></td>
      <td class="group-end-border"><div class="refundCount"><span>{{ summary.regular.refundCount }}</span></div></td>
      <td><div class="amount"><span>{{ summary.single.amount }}</span></div></td>
      <td><div class="count"><span>{{ summary.single.count }}</span></div></td>
      <td><div class="refundAmount"><span>{{ summary.single.refundAmount }}</span></div></td>
      <td class="group-end-border"><div class="refundCount"><span>{{ summary.single.refundCount }}</span></div></td>
      <td><div class="amount"><span>{{ summary.wire.amount }}</span></div></td>
      <td><div class="count"><span>{{ summary.wire.count }}</span></div></td>
      <td><div class="refundAmount"><span>{{ summary.wire.refundAmount }}</span></div></td>
      <td class="group-end-border"><div class="refundCount"><span>{{ summary.wire.refundCount }}</span></div></td>
      <td><div class="amount"><span>{{ summary.total.amount }}</span></div></td>
      <td><div class="count"><span>{{ summary.total.count }}</span></div></td>
      <td><div class="refundAmount"><span>{{ summary.total.refundAmount }}</span></div></td>
      <td class=""><div class="refundCount"><span>{{ summary.total.refundCount }}</span></div></td>
    </tr>
    <tr v-if="tbodyLists.length === 0">
      <td colspan="17" class="empty">
        <span>회원 결제 내역이 없습니다.</span>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    tbodyLists: {
      type: Array,
      default: () => []
    },
    summary: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
td {
  @apply last:border-r-0;
}
td > div {
  @apply text-center text-[16px] text-[#5E6367] py-3;
}
.bg-date {
  @apply !bg-[#f2f2f2];
}
.summary-row td {
  @apply bg-[#FFF3CD] border-none; /* 스크린샷의 노란색 배경 */
}
.summary-row td div span {
  @apply font-bold;
}
.empty {
  @apply h-[200px] text-center text-gray-400;
}
</style>
