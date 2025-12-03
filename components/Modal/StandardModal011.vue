<template>
  <div class="modal-wrap">
    <div class="modal-header">
      <strong>추천 종목 설정 관리</strong>
    </div>
    <div class="modal-body">
      <BasicTab :tabs="tabsList" :modelValue.sync="currentTab" />

      <AlarmSubmit v-if="currentTab === 0" />
      <!-- 매수 알림 전송 -->

      <RsvRegistration v-if="currentTab === 1" />
      <!--  매수 예약 등록 -->
    </div>
  </div>
</template>
<script>
import BasicTab from '@/components/TabGroup/BasicTab.vue'
import AlarmSubmit from '@/components/Modal/Standard/AlarmSubmit.vue'
import RsvRegistration from '@/components/Modal/Standard/RsvRegistration.vue'

export default {
  components: {
    BasicTab,
    AlarmSubmit,
    RsvRegistration
  },
  data() {
    return {
      tabsList: ['매수 알림 전송', '매수 예약 등록'],
      currentTab: 0
    }
  }
}
</script>
<style scoped>
.modal-body .tab {
  @apply gap-2;
}
.modal-body .tab::v-deep button {
  @apply w-[calc((100%/2)-4px)] h-[52px] bg-[#F9FAFB] hover:bg-[#575D69];
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
