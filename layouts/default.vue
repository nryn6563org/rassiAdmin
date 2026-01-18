<template>
  <div id="wrap">
    <RassiHeader />
    <RassiLNB />
    <div id="container">
      <AdminPageTitle />
      <nuxt />
    </div>
    <GlobalModal ref="globalModal" :contentComponent="activeContentComponent" :modalTitle="activeTitle" :componentProps="modalProps" />
  </div>
</template>
<script>
import AdminPageTitle from '../components/AdminPageTitle.vue'
import RassiLNB from '@/components/RassiLNB.vue'
import RassiHeader from '@/components/RassiHeader.vue'

export default {
  components: {
    RassiHeader,
    RassiLNB,
    AdminPageTitle
  },
  data() {
    return {
      // 현재 모달에 띄울 컴포넌트의 이름(문자열)을 저장하는 변수
      activeContentComponent: null,
      activeTitle: '',
      modalProps: {}
    }
  },
  created() {
    // 이벤트 버스 리스너 등록: 어디서든 'open-global-modal' 이벤트를 보내면 실행됨
    this.$nuxt.$on('open-global-modal', this.openModalHandler)
    this.$nuxt.$on('close-global-modal', this.closeModalHandler)
  },
  beforeDestroy() {
    // 메모리 누수 방지를 위해 리스너 해제
    this.$nuxt.$off('open-global-modal')
    this.$nuxt.$off('close-global-modal')
  },
  methods: {
    openModalHandler({ component, title, props }) {
      this.activeContentComponent = component
      this.activeTitle = title
      // [추가] 전달받은 props가 있으면 저장, 없으면 빈 객체
      this.modalProps = props || {}

      this.$nextTick(() => {
        if (this.$refs.globalModal && typeof this.$refs.globalModal.openModal === 'function') {
          this.$refs.globalModal.openModal()
        }
      })
    },
    closeModalHandler() {
      // GlobalModal 컴포넌트의 closeModal 메서드를 직접 호출하여 닫기 애니메이션 실행
      if (this.$refs.globalModal && typeof this.$refs.globalModal.closeModal === 'function') {
        this.$refs.globalModal.closeModal()
      }
    }
  }
}
</script>

<style scoped>
#wrap {
  @apply fixed inset-0 flex flex-wrap items-start justify-start w-full h-full overflow-auto;
}
#container {
  @apply relative w-[calc(100%-262px)] h-[calc(100%-71px)] p-[30px_33px] overflow-y-auto;
}
</style>
