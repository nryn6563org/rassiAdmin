<template>
  <div id="PullAdd">
    <div class="suggestion">
      <section>
        <strong>종목의 종목추천을 비활성하시겠습니까?</strong>

        <div class="txt">
          <span>
            선택하신 {n}개의 종목 추천 알림이 비활성됩니다. <br>
            종목을 제외하는 경우, 해당 종목은 더이상 AI종목추천 알림을 발생시키지 않습니다.
            <br><br>
            해당 종목을 다시 추가하는 경우 포트폴리오 제외 리스트에서 자동 해제됩니다.
          </span>
        </div>
      </section>
    </div>

    <div class="modal-footer">
      <div class="button-group">
        <button class="btn-mid btn009" @click="handleClose">
          <span>닫기</span>
        </button>

        <button class="btn-mid btn008" @click="handleConfirm">
          <span>비활성하기</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 닫기 버튼 클릭 시 실행
    handleClose() {
      // layouts/default.vue에 정의된 리스너에게 '닫아달라'는 신호를 보냄
      this.$nuxt.$emit('close-global-modal')
    },

    // 실시간 매수 추천 버튼 클릭 시 실행
    handleConfirm() {
      // 1. 유효성 검사 또는 API 전송 로직 작성
      // if ( ... ) { alert('입력을 확인해주세요'); return; }
      console.log('실시간 매수 추천 전송 로직 수행')

      // 2. 로직 수행 후 모달 닫기
      this.handleClose()
    }
  }
}
</script>

<style scoped>
.suggestion {
  @apply mt-0;
}
</style>
