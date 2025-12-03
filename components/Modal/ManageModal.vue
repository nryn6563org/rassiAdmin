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
import CancelModal from '@/components/Modal/Manage/CancelModal.vue'
import DeleteModal from '@/components/Modal/Manage/DeleteModal.vue'
import ResevationModal from '@/components/Modal/Manage/ResevationModal001.vue'
import CommentModal from '@/components/Modal/Manage/CommentModal.vue'
import SignalModal from '@/components/Modal/Manage/SignalModal.vue'

export default {
  components: {
    CancelModal,
    DeleteModal,
    ResevationModal,
    CommentModal,
    SignalModal
  },
  // [필수] 부모로부터 mode 데이터를 받기 위해 선언
  props: {
    mode: {
      type: String,
      default: 'manage'
    }
  },
  computed: {
    activeComponent() {
      switch (this.mode) {
        case 'cancel':
          return CancelModal
        case 'delete':
          return DeleteModal
        case 'manage':
          return ResevationModal
        case 'comment':
          return CommentModal
        case 'signal':
          return SignalModal
        default:
          return ResevationModal // 기본값
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
