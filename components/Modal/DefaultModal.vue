<template>
  <div ref="myStaticModal" class="modal animate__animated animate__fadeIn animate__faster" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content animate__animated animate__fadeInDown animate__faster">
        <div class="modal-header">
          <h5 class="modal-title">정적 모달</h5>
        </div>
        <div class="modal-body">
          <p>다른 컴포넌트에서 호출되었습니다!</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalInstance: null // 모달 인스턴스 저장용
    }
  },
  mounted() {
    // 2. 이벤트 리스너 등록: 'open-my-modal'이라는 신호가 오면 실행
    this.$nuxt.$on('open-my-modal', () => {
      this.openModal()
    })
  },
  beforeDestroy() {
    // 3. 메모리 누수 방지를 위해 리스너 제거
    this.$nuxt.$off('open-my-modal')
  },
  methods: {
    openModal() {
      // 이미 인스턴스가 생성되어 있다면 show()만 호출
      if (this.modalInstance) {
        this.modalInstance.show()
      } else {
        // 처음 열 때 인스턴스 생성
        // this.$refs.myStaticModal로 DOM에 접근
        this.modalInstance = new this.$Modal({
          el: this.$refs.myStaticModal
        })
        this.modalInstance.show()
      }
    }
  }
}
</script>
<style scoped>
</style>