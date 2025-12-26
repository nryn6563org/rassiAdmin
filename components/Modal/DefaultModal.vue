<template>
  <div ref="myStaticModal" class="modal animate__animated animate__fadeIn animate__faster" tabindex="-1" role="dialog">
    <div class="modal-dialog" ref="modalDialog">
      <div
        ref="modalContent"
        class="modal-content animate__animated animate__fadeInDown animate__faster"
        :class="computedModalClass"
      >
        <component :is="contentComponent" v-if="contentComponent" v-bind="componentProps"></component>
        <div class="close">
          <button type="button" class="btn btn-secondary" @click="closeModal">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.36475 1.28711L23.321 23.287" stroke="#404040" stroke-width="2.60924" stroke-linecap="round" />
              <path d="M1.32178 23.2871L23.278 1.28722" stroke="#404040" stroke-width="2.60924" stroke-linecap="round" />
            </svg>
          </button>
        </div>
        <!-- 닫기 -->
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
      const classes = []

      // 1. 자식 컴포넌트 파일에 정의된 고정 'modalClass'가 있으면 추가
      if (this.contentComponent && this.contentComponent.modalClass) {
        classes.push(this.contentComponent.modalClass)
      }

      // 2. props로 넘어온 mode가 'delete', 'activeOn', 'activeOff' 중 하나면 'modal-pull' 클래스 추가
      // (componentProps가 존재하는지 안전하게 확인 후 체크)
      if (
        this.componentProps &&
        (
          this.componentProps.mode === 'delete' ||
          this.componentProps.mode === 'cancel' ||
          this.componentProps.mode === 'answer' ||
          this.componentProps.mode === 'userDelete' ||
          this.componentProps.mode === 'GroupDelete' ||
          this.componentProps.mode === 'answer' ||
          this.componentProps.mode === 'activeOn' ||
          this.componentProps.mode === 'activeOff'
        )
      ) {
        classes.push('modal-pull')
      }

      // 배열을 공백으로 합쳐서 문자열로 반환 (예: "modal-manage modal-delete")
      return classes.join(' ')
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
      const dialogEl = this.$refs.modalDialog
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

      // ★ 3. 스크롤 최상단 초기화 추가
      this.$nextTick(() => {
        if (dialogEl) {
          dialogEl.scrollTop = 0 // modal-content 스크롤 초기화
        }
      })
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
