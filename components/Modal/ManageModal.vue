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
import ResevationModal001 from '@/components/Modal/Manage/ResevationModal001.vue'
import ResevationModal002 from '@/components/Modal/Manage/ResevationModal002.vue'
import ResevationModal003 from '@/components/Modal/Manage/ResevationModal003.vue'
import CommentModal from '@/components/Modal/Manage/CommentModal.vue'
import SignalModal from '@/components/Modal/Manage/SignalModal.vue'
import AddItemModal from '@/components/Modal/Manage/AddItemModal.vue'
import ActiveOnModal from '@/components/Modal/Manage/ActiveOnModal.vue'
import ActiveOffModal from '@/components/Modal/Manage/ActiveOffModal.vue'

export default {
  components: {
    CancelModal,
    DeleteModal,
    ResevationModal001,
    ResevationModal002,
    ResevationModal003,
    CommentModal,
    SignalModal,
    AddItemModal,
    ActiveOnModal,
    ActiveOffModal
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
          return ResevationModal001
        case 'manage2':
          return ResevationModal002
        case 'manage3':
          return ResevationModal003
        case 'comment':
          return CommentModal
        case 'signal':
          return SignalModal
        case 'addItem':
          return AddItemModal
        case 'activeOn':
          return ActiveOnModal
        case 'activeOff':
          return ActiveOffModal
        default:
          return ResevationModal001 // 기본값
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
