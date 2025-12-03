<template>
  <div class="modal-wrap">
    <div class="modal-header">
      <strong>종목추천 풀 관리</strong>
    </div>
    <div class="modal-body">
      <component :is="activeComponent" />
    </div>
  </div>
</template>

<script>
import PullAddModal from '@/components/Modal/Pull/PullAddModal.vue'
import PullDeleteModal from '@/components/Modal/Pull/PullDeleteModal.vue'
import PullModifyModal from '@/components/Modal/Pull/PullModifyModal.vue'

export default {
  components: {
    PullAddModal,
    PullDeleteModal,
    PullModifyModal
  },
  // [필수] 부모로부터 mode 데이터를 받기 위해 선언
  props: {
    mode: {
      type: String,
      default: 'pullAdd'
    }
  },
  computed: {
    activeComponent() {
      switch (this.mode) {
        case 'pullAdd':
          return PullAddModal
        case 'pullDlt':
          return PullDeleteModal
        case 'pullMdf':
          return PullModifyModal
        default:
          return PullAddModal // 기본값
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
