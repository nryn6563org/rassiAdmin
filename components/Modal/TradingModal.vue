<template>
  <div class="modal-wrap">
    <div class="modal-header">
      <strong>종목 관리</strong>
    </div>
    <div class="modal-body">
      <component :is="activeComponent" />
    </div>
  </div>
</template>

<script>
import BuyModal01 from '@/components/Modal/Trading/BuyModal001.vue'
import SellModal01 from '@/components/Modal/Trading/SellModal001.vue'
import BuyModal02 from '@/components/Modal/Trading/BuyModal002.vue'
import SellModal02 from '@/components/Modal/Trading/SellModal002.vue'

export default {
  components: {
    BuyModal01,
    BuyModal02,
    SellModal01,
    SellModal02
  },
  // [필수] 부모로부터 mode 데이터를 받기 위해 선언
  props: {
    mode: {
      type: String,
      default: 'buy'
    }
  },
  computed: {
    activeComponent() {
      switch (this.mode) {
        case 'buy':
          return BuyModal01
        case 'sell':
          return SellModal01
        case 'stockBuy':
          return BuyModal02
        case 'stockSell':
          return SellModal02
        default:
          return BuyModal01 // 기본값
      }
    }
  }
}
</script>

<style scoped>
/* 기존 스타일 유지 */
.modal-body .tab {
  @apply gap-2;
}
.modal-body .tab::v-deep button {
  @apply w-[calc((100%/2)-4px)] bg-[#F9FAFB] hover:bg-[#575D69];
}
.modal-body .tab::v-deep button span {
  @apply text-[#5E6367];
}
.modal-body .tab::v-deep button.active {
  @apply bg-[#575D69];
}
.modal-body .tab::v-deep button:hover span,
.modal-body .tab::v-deep button.active span {
  @apply text-white;
}
</style>