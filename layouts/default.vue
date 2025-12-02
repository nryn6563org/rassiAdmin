<template>
  <div id="wrap">
    <RassiHeader />
    <RassiLNB />
    <div id="container">
      <AdminPageTitle />
      <nuxt />
    </div>
    <GlobalModal ref="globalModal" :contentComponent="activeContentComponent" :modalTitle="activeTitle" />
  </div>
</template>
<script>
import AdminPageTitle from '../components/AdminPageTitle.vue'
import RassiLNB from '~/components/RassiLNB.vue'
import RassiHeader from '~/components/RassiHeader.vue'

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
      activeTitle: ''
    }
  },
  created() {
    // 이벤트 버스 리스너 등록: 어디서든 'open-global-modal' 이벤트를 보내면 실행됨
    this.$nuxt.$on('open-global-modal', this.openModalHandler)
  },
  beforeDestroy() {
    // 메모리 누수 방지를 위해 리스너 해제
    this.$nuxt.$off('open-global-modal')
  },
  methods: {
    openModalHandler({ component, title }) {
      this.activeContentComponent = component
      this.activeTitle = title

      // 모달 내부의 openModal 메소드 호출
      this.$nextTick(() => {
        // 수정: GlobalModal -> globalModal (소문자로 변경)
        if (this.$refs.globalModal && typeof this.$refs.globalModal.openModal === 'function') {
          this.$refs.globalModal.openModal()
        } else {
          console.error('GlobalModal ref를 찾을 수 없습니다.')
        }
      })
    }
  }
}
</script>

<style scoped>
#wrap {
  @apply fixed inset-0 flex flex-wrap items-start justify-start w-full h-full;
}
#container {
  @apply relative w-[calc(100%-262px)] h-[calc(100%-71px)] p-[30px_33px] overflow-y-auto;
}
</style>
