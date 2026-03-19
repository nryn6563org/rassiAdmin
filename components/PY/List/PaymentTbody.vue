<template>
  <tbody>
    <tr v-for="(tbodyList, tbodyListIndex) in tbodyLists" :key="tbodyListIndex">
      <td>
        <div class="listNumber">
          <span>{{ tbodyList.ListNumber }}</span>
        </div>
      </td>
      <td><div class="paymentDate"><span>{{ tbodyList.PaymentDate }}</span></div></td>
      <td><div class="userId"><span>{{ tbodyList.UserId }}</span></div></td>
      <td><div class="userName"><span>{{ tbodyList.UserName }}</span></div></td>
      <td><div class="term"><span>{{ tbodyList.Term }}</span></div></td>
      <td><div class="status"><span>{{ tbodyList.Status }}</span></div></td>
      <td><div class="paymentNo"><span>{{ tbodyList.PaymentNo }}</span></div></td>
      <td><div class="channel"><span>{{ tbodyList.Channel }}</span></div></td>
      <td><div class="amount"><span>{{ tbodyList.Amount }}</span></div></td>
      <td><div class="productName"><span>{{ tbodyList.ProductName }}</span></div></td>
      <td><div class="type"><span>{{ tbodyList.Type }}</span></div></td>
      <td><div class="subscription"><span>{{ tbodyList.Subscription }}</span></div></td>
      <td><div class="refund"><span>{{ tbodyList.Refund }}</span></div></td>
      <td>
        <div class="contract">
          <NuxtLink v-if="tbodyList.HasContract" to="/DOC/MD/Contract" target="_blank" class="btn-text">보기</NuxtLink>
          <span v-else>-</span>
        </div>
      </td>
      <td>
        <div class="proposal">
          <NuxtLink v-if="tbodyList.HasProposal" to="/DOC/MD/Proposal" target="_blank" class="btn-text">보기</NuxtLink>
          <span v-else>-</span>
        </div>
      </td>
    </tr>
    <tr v-if="tbodyLists.length === 0">
      <td colspan="15" class="empty">
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
    }
  }
}
</script>

<style scoped>
td > div {
  @apply text-center text-[16px] text-[#5E6367] py-3;
}
.empty {
  @apply h-[200px] text-center text-gray-400;
}
.btn-text {
  @apply text-[#0263E8] underline;
}
</style>
