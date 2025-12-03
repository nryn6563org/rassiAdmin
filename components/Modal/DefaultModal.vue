<template>
  <div ref="myStaticModal" class="modal animate__animated animate__fadeIn animate__faster" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div
        ref="modalContent"
        class="modal-content animate__animated animate__fadeInDown animate__faster"
        :class="computedModalClass"
      >
        <component :is="contentComponent" v-if="contentComponent" v-bind="componentProps"></component>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contentComponent: {
      type: [Object, String],
      default: null
    },
    modalTitle: {
      type: String,
      default: '기본 모달'
    },
    // [추가] Layout에서 내려주는 props 객체를 받음
    componentProps: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      modalInstance: null
    }
  },
  computed: {
    // 2. computed 속성 추가
    computedModalClass() {
      // contentComponent가 객체이고, 내부에 modalClass라는 사용자 정의 옵션이 있다면 반환
      if (this.contentComponent && this.contentComponent.modalClass) {
        return this.contentComponent.modalClass
      }
      return ''
    }
  },
  // 메모리 누수 방지: 컴포넌트가 파괴될 때 모달 인스턴스도 정리
  beforeDestroy() {
    if (this.modalInstance && typeof this.modalInstance.destroy === 'function') {
      this.modalInstance.destroy()
    }
    this.modalInstance = null
  },
  methods: {
    openModal() {
      const modalEl = this.$refs.myStaticModal
      const contentEl = this.$refs.modalContent

      // 1. 열기 애니메이션 클래스 초기화
      modalEl.classList.remove('animate__fadeOut')
      contentEl.classList.remove('animate__fadeOutUp')
      modalEl.classList.add('animate__fadeIn')
      contentEl.classList.add('animate__fadeInDown')

      // 2. 모달 인스턴스 생성 또는 재사용
      if (!this.modalInstance) {
        // vanilla modal 라이브러리 인스턴스 생성
        // (플러그인에서 $Modal을 잘 주입했다고 가정)
        this.modalInstance = new this.$Modal({
          el: this.$refs.myStaticModal
        })
      }

      // 3. 라이브러리의 show 메서드 호출
      this.modalInstance.show()
    },

    closeModal() {
      if (!this.modalInstance) {
        return
      }

      const modalEl = this.$refs.myStaticModal
      const contentEl = this.$refs.modalContent

      // 1. 닫기 애니메이션 클래스 추가
      modalEl.classList.remove('animate__fadeIn')
      contentEl.classList.remove('animate__fadeInDown')
      modalEl.classList.add('animate__fadeOut')
      contentEl.classList.add('animate__fadeOutUp')

      // 2. 애니메이션 시간(예: 500ms)만큼 기다린 후 실제로 숨김 처리
      // animate__faster는 보통 500ms입니다. 안전하게 450~500ms 뒤에 실행
      setTimeout(() => {
        if (this.modalInstance) {
          this.modalInstance.hide() // 실제 라이브러리의 숨김 처리
        }
      }, 500)
    }
  }
}
</script>
